<?php 

    if($_POST['submit']){
        $me = 'nayhtetkyaw.dev@gmail.com';
        $sender_email = $_POST['email'];
        $subject = $_POST['subject'];
        $body = $_POST['body'];
        // $alt_body = $_POST['alt_body'];
        $sender_name= $_POST['name'];

    try {
        mail($me, $subject,
        $body.$sender_email);
        echo '<script>alert("Message has been sent")</script>';
         echo '<script>window.location.href = "http://localhost/git/nayhtetkyaw.github.io/"</script>;';    
    } catch (Exception $e) {
        echo $e->ErrorInfo;
        echo '<script>alert("Message could not be sent. Mailer Error: {$mail->ErrorInfo}")</script>';
        echo '<script>window.location.href = "http://localhost/git/nayhtetkyaw.github.io/"</script>;';    
    }
    }

?>



