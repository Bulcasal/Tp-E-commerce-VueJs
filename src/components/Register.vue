<template>
    <div class="connectForm">
        <h2>Je crée mon compte</h2>
        <div class="formContainer">
            <form action="#" class="form">
                <div class="formContent">
                    <div class="inputRow">
                        <label for="user_name">Votre nom:</label>
                        <input class="inputForm" type="text" id="user_name" name="user_name" required>
                    </div>
                    <div class="inputRow">
                        <label for="user_firstname">Votre prénom:</label>
                        <input class="inputForm" type="text" id="user_firstname" name="user_firstname" required>
                    </div class="inputRow">
                    <div class="inputRow">
                        <label for="user_birthday">Votre date de naissance:</label>
                        <input class="inputForm" type="date" id="user_birthday" name="user_birthday" required>
                    </div>
                    <div class="inputRow">
                        <label for="user_pseudo">Votre adresse mail:</label>
                        <input class="inputForm" type="text" id="user_birthday" name="user_birthday" required>
                    </div>
                    <div class="inputRow">
                        <label for="user_pseudo">Choisissez votre pseudo:</label>
                        <input class="inputForm" type="text" id="inputPseudo" name="user_pseudo" required>
                    </div>
                    <div class="inputRow">
                        <label for="password">Choisissez votre mot de passe:</label>
                        <input class="inputForm" type="password" id="password" name="password" required>
                    </div>
                    <input type="submit" value="Je m'inscris" id="buttonConnect">
                </div>
            </form>
        </div>
    </div>
</template>


<script>
</script>

<style>

</style>