<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST' ) {
        
        
    $name = $_POST['name'];
   $phone = $_POST['PHONE_MOBILE'];
   $email = $_POST['imail'];
   $source = $_POST['utm_source']; 
  $campaign = $_POST['utm_campaign'];
  $content = $_POST['utm_content'];
  $medium = $_POST['utm_medium'];
  $term = $_POST['utm_term'];
   $tema = 'Заявка с сайта minigun-agency.by'; 

   $data = 'Данные формы: <br>';
   foreach ($_POST as $key => $value) {
       if ($key === 'name' || $key === 'PHONE_MOBILE'|| $key === 'imail'){
           continue;
       }
       else if($key === 'Вид_деятельности'){
                 $data .=  '<br>Ваша сфера деятельности: - ' . $_POST['Вид_деятельности'] . '<br><br>';
       }
       else if($key === 'Чем_вы_занимаетесь?'){
        $data .=  '<br>Чем вы занимаетесь?: - ' . $_POST['Чем_вы_занимаетесь?'] . '<br><br>';
      }
      
      else if($key === 'Кто_ваш_клиент?'){
        $data .=  '<br>Кто ваш клиент?: - ' . $_POST['Кто_ваш_клиент?'] . '<br><br>';
      }

      else if($key === 'В_каком_регионе_вы_работаете?'){
        $data .=  '<br>В каком регионе вы работаете?: - ' . $_POST['В_каком_регионе_вы_работаете?'] . '<br><br>';
      }
      else if($key === 'Сколько_хотите_клиентов_в_день?'){
        $data .=  '<br>Сколько хотите клиентов в день?: - ' . $_POST['Сколько_хотите_клиентов_в_день?'] . '<br><br>';
      }

      else if($key === 'Отправить_в_мессенджер'){
        $features = $_POST['Отправить_в_мессенджер'];
        $items = count($features)-1;
        foreach($features as $item => $itemval)
        {
          if ($item == 0 ) {
            $data .=  '<br>Предпочитаемый вид получения примера: -' . $itemval . ', ';
          };
          if ($item == $items) {
            $data .=  ''. $itemval . '.<br><br>';
          };
        }

        }


      else if($key === 'Хочу_получить_на_почту'){
        $data .=  '<br>Email для отправки: - ' . $_POST['Хочу_получить_на_почту'] . '<br><br>';
      }

      else if($key === 'Хочу_получить_в_мессенджере'){
        $data .=  '<br>Телефон для отправки в мессенджере: - ' . $_POST['Хочу_получить_в_мессенджере'] . '<br><br>';
      }


       else if($key === 'Чем_именно_Вы_занимаетесь?'){
        $data .=  '<br>Чем именно Вы занимаетесь? - ' . $_POST['Чем_именно_Вы_занимаетесь?'] . '<br>';
        }
        else if($key === 'В_каком_регионе_вы_работаете?'){
              $data .=  'В каком регионе вы работаете? - ' . $_POST['В_каком_регионе_вы_работаете?'] . '<br><br>';
        }
        else if($key === 'Вид_отдела_продаж'){
          $data .=  '<br>Есть ли у вас отдел продаж? - ' . $_POST['Вид_отдела_продаж'] . '<br><br>';
        }

         else if($key === 'Сколько_обращений_клиентов_вы_сейчас_получаете?'){
                  $data .=  '<br>Сколько обращений клиентов в день вы сейчас получаете? - ' . $_POST['Сколько_обращений_клиентов_вы_сейчас_получаете?'] . '<br><br>';
        }
         else if($key === 'Сколько_клиентов_нужно_дополнительно?'){
                  $data .=  '<br>Сколько клиентов в день вам нужно дополнительно? - ' . $_POST['Сколько_клиентов_нужно_дополнительно?'] . '<br><br>';
        }
        else if($key === 'Как_быстро_готовы_приступить'){
          $data .=  '<br>Как быстро готовы приступить? - ' . $_POST['Как_быстро_готовы_приступить'] . '<br><br>';
}
         else if($key === 'Мессенджер'){
                  $data .=  '<br>Мессенджер для связи - ' . $_POST['Мессенджер'] . '<br>';
        }
        
       else{
       $data .= ucfirst($key) . ' - ' . $value . '<br>';
   }
 } 
    $queryUrl = 'https://ggroupby.bitrix24.ru/rest/137/tmdyoscei3qar9m6/crm.lead.add.json';
    $queryData = http_build_query(array(
      'fields' => array(
        'TITLE' => 'Заявка с сайта minigun-agency.by',
        'NAME' => $name,
        'COMMENTS' => $data,
        'WEB_HOME' => 'minigun-agency.by',

        'UTM_SOURCE' =>  $source,
        'UTM_CAMPAIGN' => $campaign,
        'UTM_CONTENT' => $content,
        'UTM_MEDIUM' => $medium,
        'UTM_TERM' => $term,
        'PHONE' => Array(
            "n0" => Array(
                "VALUE" => $phone,
                "VALUE_TYPE" => "MOBILE",
            ),
        ),
        'EMAIL' => Array(
          "n0" => Array(
              "VALUE" => $email,
              "VALUE_TYPE" => "WORK",
          ),
      ),
    ),
      
      'params' => array("REGISTER_SONET_EVENT" => "Y")
    ));
    $curl = curl_init();
    curl_setopt_array($curl, array(
      CURLOPT_SSL_VERIFYPEER => 0,
      CURLOPT_POST => 1,
      CURLOPT_HEADER => 0,
      CURLOPT_RETURNTRANSFER => 1,
      CURLOPT_URL => $queryUrl,
      CURLOPT_POSTFIELDS => $queryData,
    ));
    $result = curl_exec($curl);
    curl_close($curl);
    $result = json_decode($result, 1);
 
    if (array_key_exists('error', $result)) echo "Ошибка при сохранении лида: ".$result['error_description']."";
  }
