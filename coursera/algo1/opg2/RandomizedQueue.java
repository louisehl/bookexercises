/******************************************************************************
  * Compilation: javac RandomizedQueue.java
  * Execution: java RandomizedQueue
  * Dependencies: StdIn.java StdOut.java
  * Data files:
  * 
  * Randomized queue implemented as an array
  *****************************************************************************/

import java.util.Iterator;
import java.util.NoSuchElementException;
import edu.princeton.cs.algs4.StdRandom;
import java.util.Arrays;

/*
 * Creates a randomised queue.
 *  @author Louise Lastein
 */
public class RandomizedQueue<Item> implements Iterable<Item> {
    private int n;
    private Item[] s;
    
    /*
     * Constructs an empty randomised queue
     */
    public RandomizedQueue(){
        n = 0;
        s = (Item[]) new Object[2];
    }
    
    /*
     * returns if the queue has no items stored in it
     * @return true if queue is empty
     */
    public boolean isEmpty(){ return n == 0; }
    
    /*
     * returns the size of the queue
     * @return an int representing number of items in queue
     */
    public int size(){ return n; }
    
    /*
     * adds the item to the queue
     */
    public void enqueue(Item item){
        if(item == null) throw new IllegalArgumentException("Item is null");
        if(n == s.length) resize(2*s.length);  //double size of array if neces.
        s[n] = item;
        n++;
    }
    
    /*
     * removes and returns a random item from the queue
     * @return random item from queue
     */
    public Item dequeue(){
        if(isEmpty()) throw new NoSuchElementException("Underflow");
        int index = StdRandom.uniform(n);
        Item item = s[index];                //save item that is to be returned
        //System.out.println("Dequeued item: " + item);
        //for(int i = 0; i < s.length; i++){
        //    System.out.printf(" " + s[i]);
        //}
        if(index != n-1) s[index] = s[n-1];  //fills hole if not last item
        s[n-1] = null;                       //avoids loitering
        n--;
        //resize if length is 4 times smaller than size
        if(n > 0 && n == s.length/4) resize(s.length/2);
        return item;
    }
    
    /*
     * returns a random item, but does not remove it from queue
     * @return random item from queue
     */
    public Item sample(){
        if(isEmpty()) throw new NoSuchElementException("Underflow");
        int index = StdRandom.uniform(n);
        return s[index];
    }
    
    //resize underlying array holding the elements
    private void resize(int capacity){
        Item[] temp = (Item[]) new Object[capacity];
        for(int i = 0; i < n; i++) {
            temp[i] = s[i];
        }
        s = temp;
    }
    
    //iterator, does not implement remove() since it's optional.
    private class ListIterator implements Iterator<Item> {
        private Item[] array;
        private int current = 0;
        
        public ListIterator() {
            array = (Item[]) new Object[n]; 
            System.arraycopy(s, 0, array, 0, n);
            shuffle(array);
        }
        
        public boolean hasNext() { return current < n; }
        
        public void remove() { 
            throw new UnsupportedOperationException("Only optional");
        }
        
        public Item next() {
            if(!hasNext()) throw new NoSuchElementException("Underflow");
            return array[current++];
        }
        
        // shuffles array with Fisher–Yates array function.
        private void shuffle(Item[] a) {
            int index;
            Item temp;
            for (int i = a.length - 1; i > 0; i--) {
                index = StdRandom.uniform(i + 1);
                temp = a[index];
                a[index] = a[i];
                a[i] = temp;
            }
        }
    } 
    
    /*
     * @return an independent iterator over items in random order
     */
    public Iterator<Item> iterator(){ return new ListIterator(); }
    
    /*
     * For tests
     */
    public static void main(String[] args){
   
    }
    
}