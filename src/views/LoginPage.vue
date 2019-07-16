<template>
    <v-layout align-center justify-center row fill-height>
        <v-flex xs10 text-xs-center>
            <v-layout v-show="this.isGuest == null" align-center justify-center row fill-height elevation-5 style="min-height:500px;" white pa-4>
                <v-flex xs12 text-xs-center>
                    <v-btn round color="#df4a31" dark v-on:click="loginWithGoogle" style="width:100%;">
                        <v-icon size="25" class="mr-2">fab fa-google</v-icon>
                        Google 로그인
                    </v-btn>
                    <v-btn v-on:click="facebookLogin" round color="#3C5A99" dark style="width: 100%">
                        <v-icon size="25" class="mr-2">fab fa-facebook</v-icon>
                        FACEBOOK 로그인
                    </v-btn>
                    <v-btn round color="#fdd835" dark style="width: 100%" @click="dialog = true">
                        <v-icon size="25" class="mr-2">far fa-envelope</v-icon>
                        EMAIL 로그인
                    </v-btn>
                    <v-btn round color="#A9B0A8" dark style="width: 100%" @click="dialog2 = true">
                        <v-icon size="25" class="mr-2">fas fa-user-plus</v-icon>
                        회원가입
                    </v-btn>
                    <v-dialog
                            v-model="dialog"
                            max-width="500px"
                    >
                        <v-card tile>
                            <v-toolbar card dark color="#fdd835">
                                <v-btn icon dark @click="dialog = false">
                                    <v-icon>close</v-icon>
                                </v-btn>
                                <v-toolbar-title>EMAIL 로그인</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form v-model="valid">
                                    <v-container fluid>
                                        <v-layout row wrap align-center justify-center>
                                            <v-flex
                                                    xs12
                                            >
                                                <v-text-field
                                                        v-model="email"
                                                        :rules="emailRules"
                                                        counter
                                                        label="E-mail"
                                                        required
                                                        @click:append="show1 = !show1"
                                                ></v-text-field>
                                            </v-flex>
                                            <v-flex
                                                    xs12
                                            >
                                                <v-text-field
                                                        v-model="password"
                                                        :append-icon="show1 ? 'visibility' : 'visibility_off'"
                                                        :rules="passwordRules"
                                                        :type="show1 ? 'text' : 'password'"
                                                        name="input-10-1"
                                                        label="Normal with hint text"
                                                        hint="At least 8 characters"
                                                        counter
                                                        @click:append="show1 = !show1"
                                                ></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 text-xs-center>
                                                <v-btn v-on:click="emailLogin" dark color="#fdd835"> 로그인 </v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-form>
                            </v-card-text>
                            <div style="flex: 1 1 auto;"></div>
                        </v-card>
                    </v-dialog>
                    <v-dialog
                            v-model="dialog2"
                            max-width="500px"
                    >
                        <v-card tile>
                            <v-toolbar card dark color="#A9B0A8">
                                <v-btn icon dark @click="dialog2 = false">
                                    <v-icon>close</v-icon>
                                </v-btn>
                                <v-toolbar-title>회원가입</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form v-model="valid">
                                    <v-container fluid>
                                        <v-layout row wrap justify-center>
                                            <v-flex
                                                    xs12
                                            >
                                                <v-text-field
                                                        v-model="email"
                                                        :rules="emailRules"
                                                        counter
                                                        label="E-mail"
                                                        required
                                                        @click:append="show2 = !show2"
                                                ></v-text-field>
                                            </v-flex>
                                            <v-flex
                                                    xs12
                                            >
                                                <v-text-field
                                                        v-model="password"
                                                        :append-icon="show2 ? 'visibility' : 'visibility_off'"
                                                        :rules="passwordRules"
                                                        :type="show2 ? 'text' : 'password'"
                                                        name="input-10-1"
                                                        label="Normal with hint text"
                                                        hint="At least 8 characters"
                                                        counter
                                                        @click:append="show2 = !show2"
                                                ></v-text-field>
                                            </v-flex>
                                            <v-flex xs12 text-xs-center>
                                                <v-btn v-on:click="userSignUp" dark color="#A9B0A8"> 가입 </v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-form>
                            </v-card-text>
                            <div style="flex: 1 1 auto;"></div>
                        </v-card>
                    </v-dialog>

                </v-flex>
            </v-layout>
            <v-layout v-show="this.isGuest != null" align-center justify-center row fill-height elevation-5 style="min-height:500px;" white pa-4>
                <v-flex xs12 text-xs-center>
                    <v-btn v-on:click="userSignOut" dark color="#DC143C" style="width: 100%"> 로그아웃 </v-btn>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
    import FirebaseService from '@/services/FirebaseService'
    import firebase from "firebase"

    const firestore = firebase.firestore();

    export default {
        name: 'LoginPage',
        data() {
            return {
                isGuest: firebase.auth().currentUser,
                valid: true,
                dialog: false,
                dialog2: false,
                notifications: false,
                sound: true,
                widgets: false,
                show1: false,
                show2: false,
                password: '',
                passwordRules: [
                    v => !!v|| 'Required.',
                    v => v.length >= 8 || 'Min 8 characters',
                    // () => ('The email and password you entered don\'t match')
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ]
            }
        },
        components: {},
        methods: {
            async emailLogin() {
                await firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorMessage)
                    // ...
                });
                console.log("success");
                console.log(firebase.auth());
                this.dialog = false;
                window.location.href = "/"
            },
            async userSignUp() {
                let email_id = this.email
                await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then(()=>{
                        var userRef = firestore.collection('users').doc(email_id);
                        var setUser = userRef.set({
                            id: email_id,
                            created: firebase.firestore.FieldValue.serverTimestamp(),
                            home: 0,
                            portfolio: 0,
                            post: 0,
                            repository: 0,
                            login: 0
                        });
                        console.log("signup set data success!");
                    })
                    .catch(function(error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorCode);
                        console.log(errorMessage);
                        // ...
                    });
                // console.log("signup!");
                this.dialog2 = false;
                window.location.href = "/"
            },
            async userSignOut() {
                await firebase.auth().signOut().then(function() {
                    // Sign-out successful.
                }).catch(function(error) {
                    // An error happened.
                });
                window.location.href = "/"
            },
            async loginWithGoogle() {
                var provider = new firebase.auth.GoogleAuthProvider();
                await firebase.auth().signInWithPopup(provider).then(function (result) {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    console.log(token)
                    console.log(user)
                    // ...
                }).catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    console.log(this.email)
                    // ...
                });
                window.location.href = "/"
            },
            async facebookLogin() {
                var provider = new firebase.auth.FacebookAuthProvider();
                await firebase.auth().signInWithPopup(provider).then(function (result) {
                    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    // ...
                }).catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    alert(errorMessage)
                    // ...
                });
                window.location.href = "/"
            },
        },
        mounted() {
            console.log(firebase.auth().currentUser);
        },
    };
</script>
