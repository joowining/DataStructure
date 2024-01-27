const Node = {
    data,
    NextNode
}

// 노드 생성 
const CreateNode = (data) => {
    Node.data = data;
    Node.NextNode = NULL;
}

//노드 추가 
const AppendNode = ( Head, NewNode ) => {
    if(Head == NULL){
        Head = NewNode;
    }else{
        Tail = Head;
        while( Tail.NextNode != NULL){
            Tail = Tail.NextNode;
        }
        Tail.NextNode = NewNode; 
    }
}


//노드 삽입 
const InsertNode = ( Target, NewNode ) => {
    NewNode.NextNode = Target.NextNode;
    Target.NextNode = NewNode;
}

//노드 제거 
const RemoveNode = ( Head, Target)=> {
    let current = Head;
    if( Head === Target){
        current = Head.NextNode;
        Head = NULL;
        return current;
    }else {
        while(current.NextNode != Target){
            current = current.NextNode;
        }
        if(Target.NextNode !== NULL ){
            current.NextNode = Target.NextNode;
            return current.NextNode;
        }else {
            current.NextNode = NULL;
            return current;
        }
    }
}

//노드 수 세기
const CountAllNode = ( Head ) => {
    let count = 0;
    let current = Head;
    if(Head === NULL){
        return count;
    }
    while(current.NextNode === NULL){
        ++count;
        current= current.NextNode
    }

    return count;
}
