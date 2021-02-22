<?php

	if(isset($_post([Email])) && !empty ($_post([Email])){
		$nome = addslashes($_post(['Nome']));
		$email = addslashes($_post(['Email']));
		$mensagem = addslashes($_post(['Mensagem']));
		$to =  "viniciusortiz1706@gmail.com";
		$subject = "Mensagem de contato site";
		$body = "Nome: ".$nome. "\n"
			"Email: ".$email. "\n"
				"Mensagem: ".$mensagem;
		$header = "From: emailformulario123456@gmail.com". "\r\n". "Reply-To: ".$email;"\e\n" . "X=Mailer:PHP/".phpversion();
		if(mail($to, $subject, $body, $header)){
			echo ("Email enviado com sucesso!");
		}else{
			echo "Houve um erro e o email nao foi enviado";
		}
	}
?>
