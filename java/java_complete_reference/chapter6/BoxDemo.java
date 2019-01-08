class Box {
    double width;
    double height;
    double depth;

    double volume() {
        return width * height * depth;
    }
}

class BoxDemo {
    public static void main(String args[]) {
        Box mybox = new Box();
        double vol;

        mybox.width = 10;
        mybox.height = 20;
        mybox.depth = 15;

        //display volume
        System.out.println("Volume is: " + mybox.volume());
    }
}