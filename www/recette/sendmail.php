<?php 
 
 
 $to = 'contact@reve-bienetre.com'; 
 $from = $_REQUEST['email'] ; 
 $name = $_REQUEST['nom'] ; 
 $objet = $_REQUEST['objet'] ; 
 $demande = $_REQUEST['demande'] ; 
 $headers = "De: $from"; 
 $subject = "Demande d'information: $objet"; 
 
 $fields = array(); 
 
 $fields{"objet"} = "Objet "; 
 $fields{"nom"} = "Nom "; 
 $fields{"email"} = "Email "; 
 $fields{"demande"} = "Demande "; 


// PREPARE THE BODY OF THE MESSAGE

$message = '<html><body>';
$message .= '<table cellpadding="0" cellspacing="0" width="100%">';
$message .= "<tr><td width='20%'><strong>Nom :</strong> </td><td>" . strip_tags($_POST['nom']) . "</td></tr>";
$message .= "<tr><td width='20%'><strong>Email :</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
$message .= "<tr><td width='20%'><strong>Demande :</strong> </td><td>" . htmlentities($_POST['demande']) . "</td></tr>";
$message .= "</table>";
$message .= "</body></html>";


 
 $headers = "From: Rêve-Bienêtre\r\n";
 $headers .= "MIME-Version: 1.0\r\n";
 $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
 $autoreply = "Merci pour votre message. Pour toute autre demande d'information veuillez consulter le site www.reve-bienetre.com";
 
 if($from == '') {print "Vous n'avez pas renseigné d'adresse mail. Merci de recommencer.";} 
 else { 
 if($name == '') {print "Vous n'avez pas renseigné de nom. Merci de recommencer.";} 
 else { 
 $send = mail($to, $subject, $message, $headers); 
 $send2 = mail($from, $subject2, $autoreply, $headers2);
 if($send) 
 {header( "Location: message-envoye.htm" );} 
 else 
 {print "Une erreur s'est produite, merci de contacter contact@reve-bienetre.com"; } 
 }
} 
 ?>