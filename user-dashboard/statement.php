<?php require_once("dashbord-header.php") ?>
<div class="container">
     <h6>
          Account Statement
     </h6>
     <hr>

     <div class="table-responsive">
          <table class="table table-hover">
               <thead>
                    <tr>
                         <th scope="col">Date</th>
                         <th scope="col">Narration</th>
                         <th scope="col">Status</th>
                         <th scope="col">Credit</th>
                         <th scope="col">Debit</th>
                         <th scope="col">Balance</th>
                    </tr>
               </thead>
               <tbody>
                    <?php
                    $email = $_SESSION['email'];
                    $sql = "Select * from `statement` WHERE email='$email'";
                    $result = mysqli_query($conn, $sql);
                    if ($result) {
                         while ($row = mysqli_fetch_assoc($result)) {
                              $id = $row['id'];
                              $date = $row['date'];
                              $narration = $row['narration'];
                              $credit = $row['credit'];
                              $debit = $row['debit'];
                              $balance = $row['balance'];
                              $status = $row['status'];
                    ?>
                              <tr>
                                   <td scope="row"><?= $date ?></td>
                                   <td><?= $narration ?></td>
                                   <?php
                                   if ($status) {
                                   ?>
                                        <td class="text-success">
                                             <?php
                                             print_r('Success');
                                             ?>
                                        </td>
                                   <?php
                                   } else {
                                   ?>
                                        <td class="text-danger">
                                             <?php
                                             print_r("Pending");
                                             ?>
                                        </td>
                                   <?php
                                   } ?>
                                   <td>
                                        <?php if ($credit == 0) {
                                             print_r("-");
                                        } else {
                                             print_r(number_format($credit));
                                        }  ?>
                                   </td>
                                   <td>
                                        <?php if ($debit == 0) {
                                             print_r('-');
                                        } else {
                                             print_r(number_format($debit));
                                        } ?>
                                   </td>
                                   <td><?= number_format($balance) ?></td>
                              </tr>
                    <?php }
                    } ?>
               </tbody>
          </table>

     </div>
</div>


<?php require_once("dashboard-footer.php") ?>