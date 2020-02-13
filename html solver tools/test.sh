echo "Enter a possible equation";
node computor.js "5 * X ^ 0 = 5 * X ^ 0";
# Does the program tell you that all real numbers are solution?
echo " "

echo "Enter an impossible equation";
node computor.js "4 * X ^ 0 = 8 * X ^ 0";
# Does the program tell you that there are no solutions?
echo " "

# 3) Equations of degree 1:
echo "Enter an equation of degree 1";
node computor.js "5 * X ^ 0 = 4 * X ^ 0 + 7 * X ^ 1";
echo " "

# 4) Equations of degree 2 - Strictly positive discriminator
# Enter a degree two equation with a discriminant strictly positive
node computor.js "5 * X ^ 0 + 13 * X ^ 1 + 3 * X ^ 2 = 1 * X ^ 0 + 1 * X ^ 1";
echo " "
# The program shows you well that it has a discriminant
# strictly positive? The program shows you two
# Solutions? These are the good ones? Do several tests.


# 5) Equations of degree 2 - Discriminant null

echo "Enter an equation of degree two with a discriminant equal to 0s";
node computor.js "6 * X ^ 0 + 11 * X ^ 1 + 5 * X ^ 2 = 1 * X ^ 0 + 1 * X ^ 1";
echo " "
# Does the program show you well that it has a zero discriminator?
# Does the program show you a unique solution?

# 6) Equations of degree 2 - Discriminant strictly negative

echo "Enter an equation of degree two with a discriminator strictly";
# negative
node computor.js "5 * X ^ 0 + 3 * X ^ 1 + 3 * X ^ 2 = 1 * X ^ 0 + 0 * X ^ 1 ";
echo " "

# Does the program show you well that it has a strictly negative discriminant?
# Does the program show you two complex solutions?

# 7) Equations of degree 3 or more

echo "Enter an equation of degree three or more. The program must";
# refuse to solve the equation. Good after, if the program
# Resoud, put the points anyway and make a little hiss
# admiration, but in any case, the program should not crash.

node computor.js "5 * X ^ 0 + 3 * X ^ 1 + 3 * X ^ 2 = 1 * X ^ 0 + 0 * X ^ 1 ";
echo " "
# Есть ли Bonus?

# Management of the input in natural form

# The program is able to handle an entry in natural form?
# - Only one coefficient ("4") is considered to be in factor of X ^ 0.
# - Only one X is considered as coefficient 1 and power 1.
# - An absent power ("4 * X") is considered to be worth 1.
# - An absent coefficient ("X ^ 6") is considered to be worth 1.
# - The powers can be in an arbitrary order, possibly repeated.


# Management of errors on the input (lexicon and syntax).

# Display results as an irreducible fraction when it's relevant.
 
# Show intermediate steps.

# Etc ...

