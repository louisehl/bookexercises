import java.lang.annotation.*;
import java.lang.reflect.*;

// Single member annotation
@Retention(RetentionPolicy.RUNTIME)
@interface MySingle {
    int value();
}

class Single {

    // Anno method using single member annotation
    @MySingle(100)
    public static void myMeth() {
        Single ob = new Single();

        try {
            Method m = ob.getClass().getMethod("myMeth");

            MySingle anno = m.getAnnotation(MySingle.class);

            System.out.println(anno.value()); // Should display 100

        } catch (NoSuchMethodException ex) {
            System.out.println("Method not found");
        }
    }

    public static void main(String args[]) {
        myMeth();
    }
}