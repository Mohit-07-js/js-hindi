docment =""
undo_stack =[]
redo_stack =[]
def make_change():
    global docment, undo_stack,redo_stack
    new_text = "Hello world"
    undo_stack.append(docment)
    docment+=new_text
    redo_stack.clear()
def undo():
    global docment, undo_stack,redo_stack
    redo_stack.append(docment)
    docment = undo_stack.pop()
def redo():
    global docment, undo_stack,redo_stack
    undo_stack.append(docment)
    docment = redo_stack.pop()
def display():
    print(docment)
make_change()
display()
undo()
display()
redo()
display()