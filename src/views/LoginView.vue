<template>
    <button @click="signUp = !signUp">SignUp / Login</button>
    <div v-if="signUp">
        <table>
            <tr><th>
                <label> Name </label>
            </th><td><input type="text" v-model="name"></td>
            </tr>
            <tr><th>
                <label> Surname</label>
            </th> <td><input type="text" v-model="surname"></td>
            </tr>
            <tr><th>

                <label> Age </label>
            </th><td><input type="text" v-model="age"></td>
            </tr>
            <tr>
                <th>
                    <label> Fav coding language</label>
                </th> <td><input type="text" v-model="fav_coding_lang"></td>
            </tr>
            <tr>
                <th>
                    <label> Favourite car</label>
                </th> <td><input type="text" v-model="fav_car"></td>
            </tr>
            <tr>
                <th>
                    <label> Eye Colour </label>
                </th><td><input type="text" v-model="eye_colour"></td>
            </tr>
            <tr>
                <th>
                    <label> Username</label>
                </th><td><input type="text" v-model="username"></td>
            </tr>
            <tr>
                <th>
                    <label> Password </label>
                </th><td><input type="text" v-model="password"></td>
            </tr>
            <!-- <tr>
                <td colspan="2"><input type="button" value="Enter" @click="addUser()"></td>
            </tr> -->
        </table>
        <button @click="addUser()">Enter</button>
    </div>
    <div v-else id="login">
        <h1>login</h1>
        <table>
           <th><label>Username:</label></th><td> <input type="text" v-model="username"></td>
           <th><label>Password: </label></th> <td><input type="password" v-model="password"></td>

        </table>
        <button @click="loginUser()">Enter</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:'',
            surname:'',
            age:'',
            fav_coding_lang:'',
            fav_car:'',
            eye_colour:'',
            username:'',
            password:'',
            signUp:true
        }
    },
    methods:{
        addUser(){
            return this.$store.dispatch('addUser',this.$data)
        },
        loginUser(){
            this.$store.dispatch('loginUser',{username:this.username,password:this.password})
            // location.reload()
        }
    }
    // computed:{
    //     addUser(){
    //         this.$store.dispatch('addUser',this.$data)
    //     },
    //     loginUser(){
    //         this.$store.dispatch('loginUser',{username:this.username,password:this.password})
    //     }
    // }
    // mounted(){
    //     this.addUser
    // }
}
</script>
<style>
    #login table{
        background-color: aqua;
        width: 450px;
        display: grid;
        margin-left: 510px;
        border-radius: 3rem;
    }
</style>