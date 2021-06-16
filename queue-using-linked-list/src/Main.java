public class Main {
    public static void main(String[] args) {

        Queue<Integer>  queue = new Queue<>();
        queue.enQueue(10);
        queue.enQueue(20);
        queue.enQueue(30);
        queue.enQueue(40);
        queue.enQueue(50);

        System.out.println("Queue Length::"+queue.size());
        queue.displayQueue();
        System.out.println();
        System.out.println("An Item deQueued ::"+queue.deQueue());
        System.out.println("Queue Length::"+queue.size());
        System.out.println("------------------------");
        queue.displayQueue();
    }
}
