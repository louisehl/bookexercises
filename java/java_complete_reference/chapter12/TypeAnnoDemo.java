import java.lang.annotation.*;
import java.lang.reflect.*;

// Marker annotation
@Target(ElementType.TYPE_USE)
@interface TypeAnno { }

// Another marker annotation that can be applied to a type
@Target(ElementType.TYPE_USE)
@interface NotZeroLen { }

// Another applied to type
@Target(ElementType.TYPE_USE)
@interface Unique { }

// Parameterised annotation applied to type
@Target(ElementType.TYPE_USE)
@interface MaxLen {
    int value();
}

// Annotation apllied to type parameter
@Target(ElementType.TYPE_PARAMETER)
@interface What {
    String description();
}

// Annotation applied to field declaration
@Target(ElementType.FIELD)
@interface EmptyOK { }

// Annotation applied to method declaration
@Target(ElementType.METHOD)
@interface Recommended { }

// Use annotation on type parameter
class TypeAnnoDemo<@What(description = "Generic data type") T> {
    
    // Use anno on constructor
    public @Unique TypeAnnoDemo() { }

    // Annotate type, not field (here, String)
    @TypeAnno String str;

    // Annotate field test
    @EmptyOK String test;

    // Type anno to type this (receiver)
    public int f(@TypeAnno TypeAnnoDemo<T> this, int x) {
        return 10;
    }

    // Annotate return type
    public @TypeAnno Integer f2(int j, int k) {
        return j + k;
    }

    // Annotate method declaration
    public @Recommended Integer f3(String str) {
        return str.length() / 2;
    }

    // Type anno with throws clause
    public void f4() throws @TypeAnno NullPointerException {

    }

    // Annotate array levels
    String @MaxLen(10) [] @NotZeroLen [] w;

    // Annotate array element type
    @TypeAnno Integer[] vec;

    public static void MyMeth(int i) {
        // Use type anno on type argument
        TypeAnnoDemo<@TypeAnno Integer> ob = new TypeAnnoDemo<@TypeAnno Integer>();

        // Use type annotation with new
        @Unique TypeAnnoDemo<Integer> ob2 = new @Unique TypeAnnoDemo<Integer>();

        Object x = Integer.valueOf(10);
        Integer y;

        // Type anno on cast
        y = (@TypeAnno Integer) x;
    }

    public static void main(String args[]) {
        MyMeth(10);
    }

    // Use type anno with inheritance clause
    class SomeClass extends @TypeAnno TypeAnnoDemo<Boolean> { }
}