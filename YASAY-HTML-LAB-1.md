# web-sytems-technologies
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Student Registration</title>
   <style>
       body {
           background-color: rgba(195, 174, 124, 0.8);
       }

       table {
           border-collapse: initial;
           width: 100%;
       }

       td, th {
           border: 1px solid #1f1f1f;
           text-align: left;
           padding: 12px;
       }

       input, select {
           width: 100%;
           padding: 10px;
           box-sizing: border-box;
           background-color: rgba(250, 254, 255, 0.282);
       }

       textarea {
           width: 100%;
           padding: 10px;
           box-sizing: border-box;
           background-image: -webkit-linear-gradient(right, rgba(242, 242, 242, 0.426),rgba(246, 225, 241, 0.665));
       }

       .label-cell {
           width: 30%;
           background-color: rgb(230, 230, 230);
       }

       .input-cell {
           width: 70%;
           flex: 1;
           background-image: -webkit-linear-gradient(right, rgba(242, 242, 242, 0.426),rgba(246, 225, 241, 0.665));
       }

       .submit-button {
           width: 5.0;
           padding: 5px;
           box-sizing: border-box;
           background-color: rgb(35, 196, 35);
           color: white;
       }

       .submit-button:hover {
           background-color: rgb(13, 158, 13);
       }

       tr:hover {
           background-color: rgb(212, 170, 106);
       }

   </style>
</head>
<body>
   <form>
       <table border="1">
           <tr>
             <th colspan="2"><div style="text-align: center;"><h1>Student Registration Form</h1></div></th>
           </tr>
           <tr>
               <th class="label-cell">First Name</th>
               <th class="input-cell"><input type="text" name="firstname" required></th>
           </tr>
           <tr>
               <th class="label-cell">Last Name</th>
               <th class="input-cell"><input type="text" name="lastname" required></th>
           </tr>
           <tr>
               <th class="label-cell">Email</th>
               <th class="input-cell"><input type="email" name="email" required></th>
           </tr>
           <tr>
               <th class="label-cell">Gender</th>
               <th class="input-cell">
                   <select name="gender" required>
                       <option value="male">Male</option>
                       <option value="female">Female</option>
                   </select>
               </th>
           </tr>
           <tr>
               <th class="label-cell">Date of Birth</th>
               <th class="input-cell"><input  name="date" required></th>
           </tr>
           <tr>
              <th class="label-cell">Address</th>
               <th class="input-cell"><textarea name="address" rows="4" cols="20" required></textarea></th>
           </tr>
           <tr>
		<th class="label-cell">City</th>
               <th class="input-cell"><input type="text" name="city" required></th>
           </tr>
           <tr>
               <th class="label-cell">Zip Code</th>
               <th class="input-cell"><input type="text" name="zipcode" required></th>
           </tr>
           <tr>
               <th></th>
               <th><button type="submit" class="submit-button">Submit</button></th>
           </tr>
       </table>
   </form>
</body>
</html>
