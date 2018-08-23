EDIT/UPDATE DATA IN A COLLECTION: 
*EXTRACT THE ID: add "let i =index" expression to ngFor, then pass thru event listener to event method
*RETAIN ID IN SERVICE: the event listner should emit the id to a service layer that will hold itand pass to consumer
    -in Service class, create a "Subject" object (observable)  that will hold the DATA/Pass
    -in producer class>event handler, create the emitter using .next method of service subject (observable)
    -in consumer class>ngOnInit(), .subscribe to the data service; may want to create edit mode flag to distinguish between add and edit mode
        **also implement unsubscribe when component is destroyed
*OBTAIN THE ITEM: add a get method to the service to retrieve by id; call the method from within the .subscribe code block
*SEND ITEM TO FORM: use @ViewChild() to create a ref to the form; then use the ref .setValue({property: value}), to pass data to form 
*ADD vs UPDATE: create an update method in service(including the emitter);
    -use a ternary expression in "add" button to switch to "update" based on value of edit mode flag
    -add code to call update() or add() in service depending on edit mode flag 
*RESET: reset the form and edit mode flag