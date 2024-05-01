<template>
    <div class="connectForm">
        <h2>Je me connecte</h2>
        <div class="formContainer">
            <form action="#" class="form">
                <div class="formContent">
                    <div class="inputRow">
                        <label for="user_pseudo">Votre pseudo:</label>
                        <input class="inputForm" type="text" id="inputPseudo" name="user_pseudo" required>
                    </div>
                    <div class="inputRow">
                        <label for="user_password">Votre mot de passe:</label>
                        <input class="inputForm" type="password" id="inputPassword" name="user_password" required>
                    </div>
                </div>
                <input type="submit" value="Je me connecte" id="buttonConnect">
            </form>
        </div>
    </div>
</template>
<script>

</script>

<style>
.connectForm h2 {
    margin-top: 120px;
}

label {
    font-family: 'PT Sans';
    margin-top: 20px;
    margin-bottom: 8px;
}

.inputForm {
    width: 300px;
    border-radius: 20px;
    border: 1px solid #073665;
    height: 30px;
}

.inputRow label {
    margin: 20px 10px 8px 0;
}

.inputRow input {
    margin-top: 8px;
}

.formContent {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.formContainer {
    display: flex;
    justify-content: center;
}

#buttonConnect {
    background-color: white;
    height: fit-content;
    margin-top: 25px;
    padding: 8px;
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

@media only screen and (max-width: 700px) {

    .inputRow label,
    input {
        margin: 20px 10px 8px 10px;
    }

    .formContent {
        align-items: center;
    }
}
</style>