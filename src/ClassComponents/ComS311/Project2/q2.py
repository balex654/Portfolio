def longest_common_substring(s1, s2):
    """function to find LCS with loops"""
    table = []
    
    count = 0
    while count <= len(s1):
        count2 = 0
        t = []
        while count2 <= len(s2):
            t.append(None)
            count2 += 1
        table.append(t)
        count += 1
                
    for row in range(len(table)):
        for col in range(len(table[row])):
            if row == 0 or col == 0:
                table[row][col] = 0
            elif s1[row - 1] == s2[col - 1]:
                table[row][col] = table[row - 1][col - 1] + 1
            elif s1[row - 1] != s2[col - 1]:
                m = max(table[row][col - 1], table[row - 1][col])
                table[row][col] = m
    
    
    result = findResult(s1, s2, table)
    
    return result

def findResult(s1, s2, table):
    """function that finds result after table is generated"""
    result = ""
    n = len(s1)
    m = len(s2)
    while n != 0 and m != 0:
        if s1[n - 1] == s2[m - 1]:
            result += s1[n - 1]
            n = n - 1
            m = m - 1
        elif s1[n - 1] != s2[m - 1]:
            a = table[n - 1][m]
            b = table[n][m - 1]
            if max(a, b) == a and n != 0:
                n = n - 1
            elif max(a, b) == b and m != 0:
                m = m - 1
    result = result[::-1]
    return result

s1 = "Look at me, I can fly!"
s2 = "Look at that, it's a fly"

s3 = "abcdefghijklmnopqrstuvwxyz"
s4 = "ABCDEFGHIJKLMNOPQRSTUVWXYS"

s5 = "balderdash!"
s6 = "balderdash!"

s7 = 1500 * 'x'
s8 = 1500 * 'y'

s9 = "them"
s10 = "tim"

s11 = "xyxxzx"
s12 = "zxzyyzxx"

print(longest_common_substring(s7, s8))