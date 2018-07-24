/******************************************************************************
  * Compilation: javac Deque.java
  * Execution: java Deque
  * Dependencies: StdIn.java StdOut.java
  * 
  * Double linked list to form a deque
  *****************************************************************************/

import java.util.Iterator;
import java.util.NoSuchElementException;

/*
 * Forms a deque with two linked lists to insert and remove from both ends.
 * Includes an iterable.
 * 
 * @author Louise Lastein
 */
public class Deque<Item> implements Iterable<Item> {
    private Node first, last;
    private int n;
    
    /**
     * Helper linked list class
     */
    private class Node {
        Item item;
        Node next;
        Node prev;
    }
    
    //iterator, does not implement remove() since it's optional.
    private class ListIterator implements Iterator<Item> {
        private Node current = first;
        
        public boolean hasNext() { return current != null;}
        public void remove() { 
            throw new UnsupportedOperationException("Only optional");
        }
        public Item next() {
            if(!hasNext()) throw new NoSuchElementException("Deque underflow");
            Item item = current.item;
            current = current.next;
            return item;
        }
    }
    
    /**
     * Initialises empty deque
     */
    public Deque(){
        first = null;
        last = null;
        n = 0;
    }
    
    /**
     * Checks if first is null to see if deque is empty. Last will still be 
     * null if only one element in deque.
     * @return true if deque is empty; false otherwise
     */
    public boolean isEmpty(){ return n == 0; }
    
    /**
     * Returns the number of elements in the deque.
     * @return number of items in deque
     */
    public int size(){ return n; }
    
    /**
     * Adds an element of type Item to beginning of deque.
     * Sets last to null if only one item in deque
     */
    public void addFirst(Item item){
        if(item == null) throw new IllegalArgumentException();
        Node oldfirst = first;
        first = new Node();
        first.item = item;
        first.next = oldfirst;
        first.prev = null;
        if(isEmpty()) last = first;
        else          oldfirst.prev = first;
        n++;
    }
    
    /**
     * Adds an element of type Item to end of deque.
     * If no elements in deque yet, calls addFirst instead.
     */
    public void addLast(Item item){
        if(item == null) throw new IllegalArgumentException();
        if(isEmpty()) addFirst(item);
        else {
            Node oldlast = last;
            last = new Node();
            last.item = item;
            last.next = null;
            last.prev = oldlast;
            if(!isEmpty()) oldlast.next = last;
            n++;
        }
    }
    
    /**
     * Removes and returns first item of deque. 
     * Sets new first to first's next element.
     * @return first item in deque.
     */
    public Item removeFirst(){
        if(isEmpty()) throw new NoSuchElementException("Deque underflow");
        Item item = first.item;     //save first item to return
        first = first.next;         //deletes first item
        n--;
        return item;
    }
    
    /**
     * Removes and returns last item of deque.
     * Sets new last to last's previous element.
     * @return last item in deque
     */
    public Item removeLast(){
        if(isEmpty()) throw new NoSuchElementException("Deque underflow");
        Item item = last.item;
        last = last.prev;
        n--;
        return item;
    }
    
    /**
     * Returns an iterator over items in order from front to end.
     * @return listiterator
     */
    public Iterator<Item> iterator(){ return new ListIterator(); }
    
    /**
     * Test to see if it runs smoothly.
     */
    public static void main(String[] args){
        Deque<Integer> deque = new Deque<Integer>();
        for(int i = 0; i < 100; i++) {
            deque.addLast(i);
        }
        deque.addFirst(-1);
        deque.addLast(101);
        deque.addLast(102);
        deque.addFirst(-2);
        System.out.println(deque.removeFirst());
        System.out.println(deque.removeLast());
        System.out.println(deque.removeLast());
        System.out.println(deque.removeLast());
        for(int i = 0; i < 50; i++){
            System.out.printf(" " + deque.removeFirst());
            System.out.printf(" " + deque.removeLast());
        }
    }
}