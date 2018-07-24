/*************************************************************************
 *  Compilation:  javac Board.java
 *  Execution:    none
 *  Dependencies: none
 *
 *  
 *
 *************************************************************************/




public class Board {
    private int[][] grid;
    
    
    /*
     * construct a board from an n-by-n array of blocks
     * (where blocks[i][j] = block in row i, column j)
     */
    public Board(int[][] blocks){
        for(int i = 0; i < blocks.length; i++){
            for(int j = 0; j < blocks.length; j++){
                grid[i][j] = blocks[i][j];
            }
        }
    }
    
    /*
     * @return board dimension n
     */
    public int dimension(){ return grid.length }
    
    
    /*
     * @return number of blocks out of place
     */
    public int hamming(){
    }
    
    
    /*
     * @return sum of Manhattan distances between blocks and goal
     */
    public int manhattan(){
        
    }
    
    /*
     * @return is this board the goal board?
     */
    public boolean isGoal(){
    }
    
    /*
     * a board that is obtained by exchanging any pair of blocks
     */
    public Board twin(){
    }
    
    /*
     * @return does this board equal y?
     */
    public boolean equals(Object y){
    }
    
    /*
     * @return all neighboring boards
     */
    public Iterable<Board> neighbors(){
    }
    
    /*
     * @return string representation of this board (in the output 
     * format specified below)
     */
    public String toString(){
    }
    
    /*
     * 
     */
    public static void main(String[] args){
    }
}
