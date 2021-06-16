import java.util.EmptyStackException;

public class Stack {

    private Node top;
    private int size;

    private class Node{

        private int data;
        private Node next;
        public Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    public void push(int data) {

        Node tempNode = new Node(data);
        tempNode.next = top; // previous node
        top  = tempNode; // current node
        size++;

    }

    public int pop() {
        if(isEmpty()) {
            throw new EmptyStackException();
        }

        int result = top.data;
        top = top.next;
        size--;
        return result;
    }

    public int peek() {
        if(isEmpty()) {
            throw new EmptyStackException();
        }
        return top.data;
    }
    public int size(){
        return size;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public String displayStack() {
        Node current = top;

        while (current != null) {
            System.out.print(current.data+" ");

            current = current.next;
        }

        return "";
    }
}
