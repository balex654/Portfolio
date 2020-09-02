def longest_common_substring(s1, s2):
    """function for finding the LCS through recurison"""
    cache = [[None for i in range(len(s2) + 1)] for j in range(len(s1) + 1)]
    
    def recurse(s1, s2):
        """recursive helper function"""
        if len(s1) == 0 or len(s2) == 0:
            return ""
        else:
            a = s1[len(s1) - 1]
            b = s2[len(s2) - 1]
            
            if a == b:
                if cache[len(s1)][len(s2)] != None:
                    return cache[len(s1)][len(s2)]
                else:
                    s = recurse(s1[:len(s1) - 1], s2[:len(s2) - 1])
                    s = s + a
                    cache[len(s1)][len(s2)] = s
                    return s
            
            if a != b:
                one = None
                two = None
                
                if cache[len(s1) - 1][len(s2)] != None:
                    one = cache[len(s1) - 1][len(s2)]
                else:
                    one = recurse(s1[:len(s1) - 1], s2)
                    cache[len(s1) - 1][len(s2)] = one
                
                if cache[len(s1)][len(s2) - 1] != None:
                    two = cache[len(s1)][len(s2) - 1]
                else:
                    two = recurse(s1, s2[:len(s2) - 1])
                    cache[len(s1)][len(s2) - 1] = two
                
                if len(one) >= len(two):
                    return one
                elif len(two) > len(one):
                    return two

    return recurse(s1, s2)

s1 = "Look at me, I can fly!"
s2 = "Look at that, it's a fly"

s3 = "them"
s4 = "tim"

s5 = "abcdefghijklmnopqrstuvwxyz"
s6 = "ABCDEFGHIJKLMNOPQRSTUVWXYS"

s7 = "balderdash!"
s8 = "balderdash!"

s9 = "Solidandkeen\nSolidandkeen\nSolidandkeen\n"
s10 = "Whoisn'tsick\nWhoisn'tsick\nWhoisn'tsick"
lcs = longest_common_substring(s9, s10)
#print(lcs)
#print(repr(lcs))

print(longest_common_substring(s3, s4))