/************************************************************************************************************************
*This API is designed to be a simple and easy tool that beginners can use to get started, we have simplified Java for you
*allowing you to easily get off the ground. You will be able to print, and do various other simple functions using this
*API. Enjoy!

*@CODECREATR
*@Version 1.0.0
************************************************************************************************************************/
public class API_STARTER
{
   /*********************************************************************************************************************
   *This method prints anything you want out on the console I/O, you can usually access this in the Run I/O section of your
   *IDE (the place you are coding in) the console also prints out any errors that you may get in your code, use our Code-0-
   *Matic to fix any erros you get along the way
   *@param s  String to print
   *********************************************************************************************************************/
   public void print(String s)
   {
      System.out.println(s);
   }
   /*********************************************************************************************************************
   *This method prints anything you want out on the console I/O and accomplishes the same thing as the other print methods
   *however this prints out an integer value
   *@param i  Integer to print
   *********************************************************************************************************************/
   public void print(int i)
   {
      System.out.println("" + i);
   }
   /*********************************************************************************************************************
   *This method prints anything you want out on the console I/O and accomplishes the same thing as the other print methods
   *however this prints out an double value, the difference between a double and an integer is that an integer is
   *something like 17 while a double would be something like 17.0 or 17.8
   *@param d  Double to print
   *********************************************************************************************************************/
   public void print(double d)
   {
      System.out.println("" + d);
   }
   /*********************************************************************************************************************
   *You can use the add method to add two values together, make sure you put in two arguements though (an arguement are 
   *specific number that you pass like add(2,3) would return a value of 5 and print it on the Console I/O this method only
   *adds integers, for doubles, look for the other add method
   *@param a first number
   *@param b second number
   *********************************************************************************************************************/
   public void add(int a, int b)
   {
      int temp = a + b;
      System.out.println("" + temp);
   }
   /*********************************************************************************************************************
   *You can use the add method to add two double values together, it works just like the other method, however, this adds
   *doubles
   *@param a first double
   *@param b second double
   *********************************************************************************************************************/
   public void add(double a, double b)
   {
      double temp = a + b;
      System.out.println("" + temp);
   }
   /*********************************************************************************************************************
   *The subtract method acts just like the add method, however, the subtract method subracts two numbers, be careful
   *the subtract method subtracts the second arguement from the first arguement, meaning that subtract(4,2) = 4 - 2 = 2
   *this method only deals with integer values
   *@param a first number (subtract from)
   *@param b second number (amount to subtract)
   *********************************************************************************************************************/
   public void subtract(int a, int b)
   {
      int temp = a - b;
      System.out.prinln("" + temp);
   }
   /*********************************************************************************************************************
   *This subtract method subtracts double values in the same fashion as the other subtract function (a function and method
   *are the same thing
   *@param a first double (subtract from)
   *@param b second double (amount to subtract)
   *********************************************************************************************************************/
   public void subtract(double a, double b)
   {
      double temp = a- - b;
      System.out.println("" + temp);
   }
   /*********************************************************************************************************************
   *This method is the mulitply method, we can multiply two numbers using the two arguement that the user (you) pass
   *for example, muliply(2,3) would print out 6 for you, we can also multiply negatives Note: we are workin with integer 
   *values
   *@param a first number to mulitply
   *@param b second number to mulitply
   *********************************************************************************************************************/
   public void mulitply(int a, int b)
   {
      int temp = a * b;
      System.out.println("" + temp);
   }
   /*********************************************************************************************************************
   *This method is for mulitplying two double values and keep in mind, we can still muliply negatives
   *@param a first double to multiply
   *@param b second double to multiply
   *********************************************************************************************************************/
   public void mulitply(double a, double b)
   {
      double temp = a * b;
      System.out.println("" + temp);
   }
   /*********************************************************************************************************************
   *This method is the divide method, we will divide two integer values for you, even if the integer values are negative
   *you can use this in this fashion divide(4,2) = 4/2 = 2, Have Fun!
   *@param a dividend
   *@param b divisor
   *********************************************************************************************************************/
   public void divide(int a, int b)
   {
      double temp = a/b;
      System.out.println("" + temp);
   }
   /*********************************************************************************************************************
   *This method is the divide method for dividing doubles
   *@param a dividend
   *@param b divisor
   *********************************************************************************************************************/
   public void divide(double a, double b)
   {
      double temp = a/b;
      System.out.println("" + temp);
   }
   /*********************************************************************************************************************
   *This method is the power method, you can raise any number to any power, just enter the number first then the power you
   *want to raise it by, Enjoy! This only accepts double values so if you want to input 2^2 then put in power(2.0, 2.0);
   *@param a number
   *@param b power
   *********************************************************************************************************************/
   public void power(double a, double b)
   {
      double temp = Math.pow(a, b);
      System.out.println("" + temp);
   }
   /*********************************************************************************************************************
   *This method is the root method, you can find any root of any number easily, and it will print to the console as well
   *to find the square root of 4 type in root(4, 2) this also only accepts double arguments so 4 would be 4.0
   *@param a number to root
   *@param b root amount
   *********************************************************************************************************************/
   public void root(double a, double b)
   {
      double temp = Math.pow(a, 1/b);
      System.out.println("" + temp);
   }
}   