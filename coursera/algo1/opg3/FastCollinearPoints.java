/*************************************************************************
 *  Compilation:  javac LineSegment.java
 *  Execution:    none
 *  Dependencies: Point.java
 *
 *  
 *************************************************************************/

import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import java.util.Collections;
import edu.princeton.cs.algs4.In;
import edu.princeton.cs.algs4.StdDraw;
import edu.princeton.cs.algs4.StdOut;

public class FastCollinearPoints {
    private int n = 0;
    private List<LineSegment> lineSeg;
    
    /**
     * 
     * Finds all line segments containing 4 or more points
     * @param List of points
     */
    public FastCollinearPoints(Point[] points){
        if(points == null) throw new IllegalArgumentException();
        for(int i = 0; i < points.length; i++){
            if(points[i] == null){
                throw new IllegalArgumentException();
            }
        }
        Point[] poin = new Point[points.length];
        poin = points.clone();
        Arrays.sort(poin);
        for(int i = 0; i < poin.length - 1; i++){
            if(poin[i].compareTo(poin[i + 1]) == 0){
                throw new IllegalArgumentException();
            }
        }
        
        lineSeg = new ArrayList<LineSegment>();
        
        for(int i = 0; i < poin.length; i++){
            Point p = poin[i];         //chooses point to sort order from
            
            Point[] po = new Point[poin.length];
            po = poin.clone();
            Arrays.sort(po, p.slopeOrder());
                
            List<Point> temp = new ArrayList<Point>();
            for(int j = 1; j < po.length; j++){
                temp.add(po[j]);
                if(j+1 == po.length || (j+1 < po.length && po[0].slopeTo(po[j]) != po[0].slopeTo(po[j+1]))){
                    if(temp.size() > 2){    //p point is included already
                        temp.add(p);
                        Collections.sort(temp);
                        if(temp.get(0) == p){    //only add it if it is the natural order base
                            lineSeg.add(new LineSegment(temp.get(0), temp.get(temp.size()-1)));
                            n++;
                        }
                    }
                    temp.clear();
                }
            }
            
        }

    }
   
    /**
     * 
     * @return n, number of segments in the points array
     */
    public int numberOfSegments(){ return n; }
    
    /**
     * @return array of line segments from array of points
     */
    public LineSegment[] segments(){
        LineSegment[] seg = new LineSegment[lineSeg.size()];
        seg = lineSeg.toArray(seg);
        return seg;
    }
    
    public static void main(String[] args) {
         // read the n points from a file
        In in = new In(args[0]);
        int n = in.readInt();
        Point[] points = new Point[n];
        for (int i = 0; i < n; i++) {
            int x = in.readInt();
            int y = in.readInt();
            points[i] = new Point(x, y);
        }
        
        // draw the points
        StdDraw.enableDoubleBuffering();
        StdDraw.setXscale(0, 32768);
        StdDraw.setYscale(0, 32768);
        for (Point p : points) {
            p.draw();
        }
        StdDraw.show();
        
        // print and draw the line segments
        FastCollinearPoints collinear = new FastCollinearPoints(points);
        for (LineSegment segment : collinear.segments()) {
            StdOut.println(segment);
            segment.draw();
        }
        StdDraw.show();
    }
}