import java.io.*;
import java.util.*;

public class Parser{
   static PrintStream errorOut = null;
   static PrintStream descOut = null;
   public static void main(String[] args){
      try{errorOut = new PrintStream(new FileOutputStream(new File("errorOut.txt")));}catch(FileNotFoundException e){
         System.out.println("not found");
         System.exit(0);
      }
      try{descOut = new PrintStream(new FileOutputStream(new File("descOut.txt")));}catch(FileNotFoundException e){
         System.out.println("not found");
         System.exit(0);
      }
      File f = new File("errors1.txt");
      Scanner infile = null;
      try{
         infile = new Scanner(f);      
      }catch(FileNotFoundException e){
         System.err.println("not found");
         System.exit(0);
      }
      while(infile.hasNext()){
         String s = infile.nextLine();
         int pos = 0;
         while(!(s.substring(pos,pos+9)).equals("Exception")){
            pos++;
         }
         String error = s.substring(0, pos+9);
         String desc = s.substring(pos+9, s.length());
         errorOut.println(error);
         descOut.println(desc);
      }
   }

}