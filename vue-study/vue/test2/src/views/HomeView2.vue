<template>
    <div>
        <h1> This is Home2 Page </h1>
        <form action = "">
            <!--(1)props로 데이터를 넘겨주고 (2)InputField에서 value 값이 변하면 emit으로 부모 컴포넌트에게 값(e.target.value)을 보내줘서
            (3)부모 컴포넌트에서 update-name 이벤트로 보내온 값을 받아와서 아래 name 업데이트 시켜준다.-->
            <InputField :name="name" @update-name="name = $event.target.value"/>
            <br><button>Submit</button>
        </form>
        {{name}}
        
    </div>
    
</template>

<script>
import InputField from '@/components/InputField.vue';
export default {
    components :{
        InputField
    },

    data(){
        return {
            name : ""
        }
    },
    // methods:{
    //     //이벤트로 받으면 함수를 실행시킴. 넘어온 value(name)을 부모의 name에 업데이트를 시켜준다. ㅇ
    //     updateName(name){
    //         this.name = name;
    //     }
    // }
   

}
</script>

<style scoped>
h1{
    color:red;
}

</style>