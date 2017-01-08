class Node
  attr_reader :key, :val
  attr_accessor :next, :prev
  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end
end

class LinkedList
  def initialize
    @head = Node.new
    @tail = Node.new
    @head.next = @tail
    @tail.prev = @head
  end

  def get(key)
    current = @head.next

    while current
      return current if current.key == key
      current = current.next
    end

    nil
  end

  def includes(key)
    !!get(key)
  end

  def append(key, val)
    new_node = Node.new(key, val)

    @tail.prev.next = new_node
    new_node.prev = @tail.prev
    new_node.next = @tail
    @tail.prev = new_node
  end

  def prepend(key, val)
    new_node = Node.new(key, val)

    new_node.next = @head.next
    @head.next.prev = new_node
    new_node.prev = @head
    @head.next = new_node
  end

  def remove(key)
    current = @head.next
    prev = @head
    removed = nil

    while current != @tail
      if current.key == key
        prev.next = current.next
        current.next.prev = prev

        removed = current

        current = current.next
      else
        prev = prev.next
        current = current.next
      end
    end

    removed
  end

  def each
    current = @head.next

    while current != @tail
      yield(current.key, current.val)
      current = current.next
    end
  end

  def to_s
    str = ''

    each do |key, val|
      str << "(#{key})(#{val}) => "
    end

    str
  end
end

class HashMap
  attr_reader :store

  def initialize
    @store = Array.new(8) { LinkedList.new }
    @count = 0
  end

  def get(key)
    bucket(key).get(key)
  end

  def set(key, val)
    delete(key) if bucket(key).includes(key)
    resize if @count == num_buckets

    bucket(key).prepend(key, val)
    @count += 1
  end

  def delete(key)
    return nil unless bucket(key).includes(key)
    bucket(key).remove(key)
    @count -= 1
  end

  alias_method :[], :get
  alias_method :[]=, :set

  private
  def bucket(key)
    @store[key.hash % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    old_store = @store
    @count = 0
    @store = Array.new(old_store.length * 2) { LinkedList.new }

    @old_store.each do |list|
      list.each do |key, val|
        set(key, val)
      end
    end
  end
end

hm = HashMap.new
