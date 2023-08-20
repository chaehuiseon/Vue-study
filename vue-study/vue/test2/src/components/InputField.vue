<template>
    <div>
        <label for = "">Name</label>
        <input 
            type = "text"
            :value="name"
            style="padding: 30px; border: 2px solid green;"
            @input="updateName"> <!--유저가 인풋해서 값이 바뀌었을때, 부모 컨포넌트에게 보내기 위함. 인풋이벤트 발동-->
    </div>
            
</template>

<script>

export default{
    props:{
        name:{
            type:String,
            required: true
        }
    },
    methods:{
        updateName(e){
            console.log(e.target.value);
            //부모 컨포넌트에게 값을 올림
            this.$emit('update-name',e.taget.value);
        }
    }
}
</script>
