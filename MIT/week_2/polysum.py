import math
def polysum(n,s): 
    '''
    n = number of sides.
    s = The length of each side.
    math = imported to use tan and pi
    
    This function sums the area and square of the perimeter of the regular polygon. 
    The function returns the sum, rounded to 4 decimal places
    '''
    return round(((0.25*n*(s**2))/(math.tan(math.pi/n))) + (s*n)**2,4)
    
