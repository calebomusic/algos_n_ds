# Is uniq. Determine if a string has all unique characters
=begin
  Two ways to do this.
  First, iterate through the string, storing each character in a set.
  If the char already exists in the set, return false.
  If iteration finishes, return true.
  T: O(n), S: O(1), because set will never incl more than 26 characters.
  Don't forget to include 'set'

  Second, if an additional data structure cannot be used then one must use two nested
  loops.
=end

require 'set'

def uniq?(str)
  seen = Set.new

  str.each_char do |char|
    return false if seen.include?(char)
    seen.add(char)
  end

  true
end
#check permutation (given two, check if one is the permutation of the other)

=begin
  To do this we can keep track of the character counts of both strings, if the character counts are equal,
  then we will return true.

  First, check the lengths of the strings. If they are not equal, return false.
  Store character counts of chars in str1 in hash.
  Iterate through chars in str2. If hash[char] == nil || -1 return false,
  else decrement
  Finally, iterate through hash, checking to insure that all values are zero
=end
def check_permutation(str1, str2)
  return false if str1.length != str2.length

  counts1 = Hash.new { |k, v| k[v] = 0 }

  str1.each_char { |char| counts1[char] += 1 }

  str2.each_char do |char|
    return false if counts1[char] == nil || counts1[char] == -1
    counts1[char] -= 1
  end

  counts1.keys.all? { |k| counts1[k] == 0 }
end
#urlify (replace all spaces in a string with %20)
=begin
  One way to do this is to simply split the string by spaces, insert %20 in between every space
  and then join. One shouldn't do this by inserting into the array of the split string, becuase
  an insertion at i would cause every element after i to be moved over. Instead, one should just create
  a result array to push into.

  This solution is T: O(n), S: O(n)
=end

def urlify(str)
  split = str.split(' ')
  urled = []
  split.each_with_index do |sub, i|
    urled.push(sub)
    urled.push('%20') if i != (split.length - 1)
  end

  urled.join('')
end


#PalindromePermutation (is the arg a perm of a palindrome)
=begin
  To discover whether S is a permutation of a palindrome one needs to check no more
  than one character count is odd.
  One could create a characer count hash and then check that no more than one element is odd.
  However, it is more elegant to track the count of odds as one is creating the character hash.
  If the count of odds is more than one, return false, else return true.

  Edge cases: do spaces count? Assume they do. If a character does not count,
  then it's count will not be added to the character array
=end

def palindrome_permutation(str)
  counts = Hash.new { |k, v| k[v] = 0 }
  odd = 0

  str.each_char do |char|
    counts[char] += 1

    if counts[char].odd?
      odd += 1
    else
      odd -= 1
    end
  end

  odd < 2 ? true : false
end
