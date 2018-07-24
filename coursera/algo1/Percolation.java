import edu.princeton.cs.algs4.WeightedQuickUnionUF;

public class Percolation {
    private boolean[][] grid;
    private WeightedQuickUnionUF wqu;
    private int no;
    private int noos;
    
    public Percolation(int n){
        if(n<=0){
            throw new IllegalArgumentException("n is smaller than 0.");
        }
        grid = new boolean[n+1][n+1];
        wqu = new WeightedQuickUnionUF(n*n+2);
        no = n;
        noos = 0;
        for(int i = 0; i < n; i++){
            wqu.union(n*n, i);
            wqu.union(n*n+1, n*n-i-1);
        }
    }
    
    private int xyto1D(int row, int col){
        return (row-1)*no+col-1;
    }
    
    public void open(int row, int col){
        outsideException(row);
        outsideException(col);
        int x = xyto1D(row, col);
        if(!isOpen(row,col)){
            grid[row][col] = true;
            noos++;
            if(row-1 > 0 && isOpen(row-1, col)){
                wqu.union(x, x-no);
            }
            if(col-1 > 0 && isOpen(row, col-1)){
                wqu.union(x, x-1);
            }
            if(row + 1 < grid.length && isOpen(row+1, col)){
                wqu.union(x, x+no);
            }
            if(col + 1 < grid.length && isOpen(row, col+1)){
                wqu.union(x, x+1);
            }
        }
    }
    
    public boolean isOpen(int row, int col){
        outsideException(row);
        outsideException(col);
        return grid[row][col];
    }
    
    private void outsideException(int val){
        if(val < 1 || val > grid.length){
            throw new IllegalArgumentException();
        }
    }
    
    public boolean isFull(int row, int col){
        outsideException(row);
        outsideException(col); 
        if(isOpen(row,col)){
            if(wqu.connected(no*no, xyto1D(row,col))) return true;
        }
        return false;
    }
    
    public int numberOfOpenSites(){
        return noos;
    }
    
    public boolean percolates(){
        if(wqu.connected(no*no, no*no+1)) return true;
        return false;
    }
}