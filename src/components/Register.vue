<template>
    <div class="connectForm">
    <h2>Je crée mon compte</h2>
    <div class="formContainer">
        <form action="#" class="form">
            <label for="user_name">Votre nom:</label>
            <input class="inputForm" type="text" id="user_name" name="user_name" required>
            <label for="user_firstname">Votre prénom:</label>
            <input class="inputForm" type="text" id="user_firstname" name="user_firstname" required>
            <label for="user_birthday">Votre date de naissance:</label>
            <input class="inputForm" type="date" id="user_birthday" name="user_birthday" required>
            <label for="user_pseudo">Votre adresse mail:</label>
            <input class="inputForm" type="text" id="user_birthday" name="user_birthday" required>
            <label for="user_pseudo">Choisissez votre pseudo:</label>
            <input class="inputForm" type="text" id="inputPseudo" name="user_pseudo" required>
            <label for="password">Choisissez votre mot de passe:</label>
            <input class="inputForm" type="password" id="password" name="password" required>
            <input type="submit" value="Je m'inscris" id="buttonConnect">
        </form>
    </div>
</div>
</template>


<script>
export default {
    setup() {

    },
};
</script>

<style>

.connectForm h2 {
    margin-top: 120px;
}
label {
    margin-top: 20px;
    margin-bottom: 8px;
}

input {
    margin-right: 20px;
}

.formContainer input {
    width: 20vh;
    border-radius: 20px;
    border: 1px solid #073665;
    height: 2.5vh;
}

.formContainer {
    display: flex;
}

#buttonConnect {
    background-color: white;
    height: fit-content;
    margin-top: 25px;
    padding: 10px;
    font-size: large;
    border-radius: 10px;
    border: 1px solid #ff4076;
    color: #ff4076;
    transition: color .20s ease-in-out, background-color .20s ease-in-out, border-color .20s ease-in-out, box-shadow .20s ease-in-out;
}

#buttonConnect:hover {
    background-color: #ff4076;
    color: white;
}

.form {
    display: flex;
    flex-direction: column;
}
</style>