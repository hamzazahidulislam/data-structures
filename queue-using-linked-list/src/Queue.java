public class Queue<T> {

    private Node<T> front;
    private Node<T> rear;

    private int length;

    private static class Node<T> {
        private final T data;
        private Node<T> next;

        public Node(T data) {
            this.data = data;
        }
    }

    /**
     * Method to EnQueue or insert an Item in Queue(rear)
     * @param data Item to be inserted in Queue
     */
    public void enQueue(T item) {
        if (front == null) {
            rear = new Node<T>(item);
            front = rear;
        } else {
            rear.next = new Node<T>(item);//current node
            rear = rear.next;//current node is rear
        }
        length++;
    }

    /**
     * Method to DeQueue or Remove an Item From Queue
     * @return return DeQueued or Removed Item from queue(front)
     */
    public T deQueue() {
        if (front != null) {
            T item = front.data;//current item
            front = front.next;//next item
            length--;
            return item;//current item return
        }
        return null;
    }

    public int size() {
        return length;
    }

    public void displayQueue() {
        Node<T> currentNode = front;
        while (currentNode != null) {
            System.out.print(currentNode.data+" ");
            currentNode = currentNode.next;
        }
    }
}
