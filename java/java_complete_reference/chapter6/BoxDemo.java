class Box {
    double width;
    double height;
    double depth;

    Box(double w, double h, double d) {
        width = w;
        height = h;
        depth = d;
    }

    double volume() {
        return width * height * depth;
    }
}

class BoxDemo {
    public static void main(String args[]) {
        Box mybox = new Box(10, 15, 20);
        double vol;


        //display volume
        System.out.println("Volume is: " + mybox.volume());
    }
}