/******************************************************************************
  * Compilation: javac Permutation.java
  * Execution: java Permutation k
  * Dependencies: StdIn.java StdOut.java
  * 
  * Takes in a randomized queue and an input text and prints strings in random
  *****************************************************************************/

import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;

/*
 * Prints k numbers of random strings from a .txt file
 * Outputs k random strings from .txt file
 * 
 * @author Louise Lastein
 */
public class Permutation{
    public static void main(String[] args){
        int k = Integer.parseInt(args[0]);
        RandomizedQueue<String> q = new RandomizedQueue<String>();
        while(!StdIn.isEmpty()) {
            String item = StdIn.readString();
            q.enqueue(item);
        }
        for(int j = 0; j < k; j++) {
            StdOut.println(q.dequeue());
        }
    }
}