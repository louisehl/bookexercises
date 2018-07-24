/*************************************************************************
 *  Compilation:  javac LineSegment.java
 *  Execution:    none
 *  Dependencies: Point.java
 *
 *  For simplicity, we will not supply any input to BruteCollinearPoints 
 *  that has 5 or more collinear points.
 *
 *************************************************************************/

import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import edu.princeton.cs.algs4.In;
import edu.princeton.cs.algs4.StdDraw;
import edu.princeton.cs.algs4.StdOut;

/**
 * BruteCollinearPoints.java that examines 4 points at a time and checks 
 * whether they all lie on the same line segment, returning all 
 * such line segments.
 */
public class BruteCollinearPoints{
    private List<LineSegment> lineSeg;
    private int n = 0;
    
    /**
     * To check whether the 4 points p, q, r, and s are collinear, check whether
     * the three slopes between p and q, between p and r, and between p and s 
     * are all equal.
     */
    public BruteCollinearPoints(Point[] points){
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

        for(int i = 0; i < poin.length - 3; i++){
            Point p = poin[i];
            for(int j = i + 1; j < poin.length - 2; j++){
                Point q = poin[j];
                double slopepq = p.slopeTo(q);
                for(int k = j + 1; k < poin.length - 1; k++){
                    Point r = poin[k];
                    double slopepr = p.slopeTo(r);
                    if(slopepr == slopepq){
                        for(int l = k + 1; l < poin.length; l++){
                            Point s = poin[l];
                            double slopeps = p.slopeTo(s);
                            if(slopepr == slopeps){
                                lineSeg.add(new LineSegment(p, s));
                                n++;
                            }
                        }
                    }
                }
            }
        }
    }
    
    /**
     * @param n number of segments
     * @return number of segments in points array of points
     */
    public int numberOfSegments(){
        return n;
    }
    
    /**
     * @return all line segments given the two outer points.
     */
    public LineSegment[] segments(){
        LineSegment[] seg = new LineSegment[lineSeg.size()];
        seg = lineSeg.toArray(seg);
        return seg;
    }
    
    public static void main(String[] args){
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
        BruteCollinearPoints collinear = new BruteCollinearPoints(points);
        for (LineSegment segment : collinear.segments()) {
            StdOut.println(segment);
            segment.draw();
        }
        StdDraw.show();
    }
    
    
}