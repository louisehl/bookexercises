import edu.princeton.cs.algs4.StdStats;
import edu.princeton.cs.algs4.StdRandom;

public class PercolationStats {
    private double[] percTime;
    private int t;
    public PercolationStats(int n, int trials){
        if(n <= 0 || trials <= 0) throw new IllegalArgumentException();
        percTime = new double[trials];
        t = trials;
        for(int i=0; i < trials; i++){
            Percolation per = new Percolation(n);
            while(!per.percolates()){
                per.open(StdRandom.uniform(1, n+1), StdRandom.uniform(1,n+1));
            }
            percTime[i] = per.numberOfOpenSites()*1.0 / (n*n);
        }

    }
    
    public double mean(){
        double mean = StdStats.mean(percTime);
        return mean;
    }
    
    public double stddev(){
        double stddev = StdStats.stddev(percTime);
        return stddev;
    }
    
    public double confidenceLo(){
        double conf = mean()-(1.96*stddev())/Math.sqrt(t);
        return conf;
    }
    
    public double confidenceHi(){
        double conf = mean()+(1.96*stddev())/Math.sqrt(t);
        return conf;
    }

    public static void main(String[] args){
        if(args.length > 2) throw new IllegalArgumentException();
        int n = Integer.parseInt(args[0]);
        int trials = Integer.parseInt(args[1]);
        PercolationStats stats = new PercolationStats(n, trials);
        
        System.out.println("Mean:                    " + stats.mean());
        System.out.println("Stddev:                  " + stats.stddev());
        String a = String.format("%.5g", stats.confidenceLo());
        String b = String.format("%.5g", stats.confidenceHi());
        System.out.println("Confidence interval:     ["+ a +", "+ b + "]");
    }
}