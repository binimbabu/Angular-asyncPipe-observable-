Async pipe- Observable

Async pipe is used if we want to get the value directly from the observable and showcase in the UI without storing the value into a variable or subscribing the observable.

Ts file

list = of([10,20,30]);


html file


<ng-container *ngFor="let val of list |async">
{{val}}
</ng-container>


Whenever we are using async it will get the observable ( here ‘list’ ) subscribe to it and extract the data and give it to ‘ val’.


Output

10 20 30


Another example of sync using *ngIf


ts file

show = of(true);


html file


<ng-container *ngIf="show |async">
Bini is visible
</ng-container>


Output

Bini is visible


Here ‘show’ variable is set to true (using this statement   show = of(true)   )  hence the value in ng-container (i.e. Bini is visible ) is visible.

Whenever you want to showcase asynchronous data into the html then you can use async. When the observable updates automatically data in the html also automatically updates.




data!: Observable<any>
http: HttpClient = inject(HttpClient);
constructor() {
this.getList();
}

getList(): void {
this.data = this.http.get(`https://jsonplaceholder.typicode.com/todos`);
}




<ng-container *ngFor="let item of data | async">
<p>
{{item.title}}
</p>
</ng-container>




Output


delectus aut autem
quis ut nam facilis et officia qui
fugiat veniam minus
et porro tempora
laboriosam mollitia et enim quasi adipisci quia provident illum
qui ullam ratione quibusdam voluptatem quia omnis
illo expedita consequatur quia in
quo adipisci enim quam ut ab
molestiae perspiciatis ipsa
illo est ratione doloremque quia maiores aut
vero rerum temporibus dolor
ipsa repellendus fugit nisi
et doloremque nulla
repellendus sunt dolores architecto voluptatum