<template>
    <div>
        <h1>{{title}}</h1> <!--props.. component사용할때마다 따로 정의해서 사용하고 싶음.-->
        <p>{{name}}</p>
        <button @click="updateName">Change Name</button>
        
    </div>
    
</template>

<script>
export default {
    //component에서 props셋팅을 해 놓음. 컴포넌트 사용할때 정의해주면 사용됨.
    //props:['title'], //title을 props로 받을거다.
    props:{
        title : {
            type: String, // String이 아닌 다른 타입은 받지 않겠다. //String, Number, Obejct ....
            required: false, //무조건 보내줘야한다. 안보내주면 props missing warn 뜸. flase면 안보내줘도 됨.
            default: "default title"// poprs를 안보내주면 default title이 그려짐.
            
        }
        //여러개 더 추가할 수 있음.
        //props에서 사용하고 있는 key이름은 다른곳(ex : data에서 ) 사용하면 안됨. name으로 할거면 아래 name 지워야함
        //받은 props(component 사용하면서 받아온거)는 직접적으로 변경을 해주면 안됨.워닝뜸.
        // -- > 부모 컴포넌트(HeeseonCoder을 사용하고 있는 뷰 HomeView, AboutView)에서 보내주는 데이터를 자식에서 바꿔줘버리면 헷갈려할수 있어서 안됨. 자식에서 바꾸지말고 부모에서 바꿔줘야한다.

    },
    data(){
        return {
            name : "HeeSeon Coder",
        }
    },
    methods : {
        updateName() {
            this.name = "HeeSeon Coder Updated";

        }
    }

}
</script>

<style scoped>

</style>