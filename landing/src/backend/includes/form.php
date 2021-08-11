<main>
    <form id="Form" name="Form" action="sendEmail.php" method="POST">
        
        <div>
            <label for="name">Nombre:</label>
            <input  name="name" id="name" type="text" placeholder="Escribe tu nombre" required>
        </div>
        <div>
            <label for="phone">Teléfono:</label>
            <input name="phone" id="phone" type="text"  placeholder="Escribe tu número telefónico" required>
        </div>
        <div>
            <label for="mail">Correo:</label>
            <input name="mail" id="mail" type="email" placeholder="Escribe tu correo electrónico" required>
        </div>
        <div>
            <label for="comments">Comentarios:</label>
            <textarea id="comments" name="comments" placeholder="Escribe tus comentarios" cols="30" rows="5"></textarea>
        </div><br>
        <div class="Button">
            <input class="submit" type="submit" value="Enviar" onclick="return enviar();">
        </div>

    </form>
</main>
<script src='validar.js'></script>