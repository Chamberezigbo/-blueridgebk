<?php require_once("dashbord-header.php") ?>
<style>
     .indicator {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
     }

     .indicator.active {
          background: green;
     }

     .indicator.inactive {
          background: red;
     }
     /* Card Container */
.debit-card {
    width: 350px;
    height: 200px;
    border-radius: 15px;
    background: linear-gradient(135deg, #0073e6, #001f5b);
    color: #ffffff;
    padding: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    font-family: Arial, sans-serif;
    position: relative;
    overflow: hidden;
}

/* Card Body */
.card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

/* Card Title (User Name and Account Type) */
.card-title {
    font-size: 1.1rem;
    margin: 5px 0;
}

/* Card Subtitle (Balance) */
.card-subtitle {
    font-size: 1rem;
    color: #d9d9d9;
}

/* Card Text (Account Number) */
.card-text {
    font-size: 0.9rem;
    margin-top: 10px;
    color: #f2f2f2;
}

/* Links for Credits/Debits */
.card-link {
    font-size: 0.8rem;
    color: #a9c2e4;
    text-decoration: none;
    margin-right: 10px;
}

.card-link:hover {
    color: #ffffff;
}

/* Responsive Design */
@media (max-width: 768px) {
    .debit-card {
        width: 90%;
        height: 30vh;
    }

}

</style>

<div class="card debit-card">
     <div class="card-body">
          <div class="d-flex align-items-end flex-column">
               <h5 class="card-text ">....</h5>
          </div>
          <h5 class="card-title"><?= $_SESSION['surname'] . " " . $_SESSION['otherName'] ?></h5>
          <h5 class="card-title"><?= $_SESSION['accountType'] ?></h5>
          <h6 class="card-subtitle mb-2"><?= $_SESSION['currency'] . " " . number_format($_SESSION['balance']) ?></h6>
          <h6 class="card-text">Account Number <br>
               <span>
                    <?= $_SESSION['accountNumber'];  ?>
               </span>
          </h6>
          <a href="#" class="card-link">Credits</a>
          <a href="#" class="card-link">Debits</a>
          <?php
          if ($_SESSION['isShow']) {
          ?>
               <div class="d-flex align-items-end flex-column">
                    <?php
                    if ($_SESSION['isDisapprove']) {
                    ?>
                         <h6><span class="indicator active bg-danger"></span>Inactive </h6>
                    <?php
                    } else {
                    ?>
                         <h6><span class="indicator active"></span>Active </h6>
                    <?php
                    }
                    ?>
               </div>
          <?php
          }
          ?>

     </div>
</div>



<div class="line"></div>

<div class="card">
     <ul class="list-group list-group-flush">
          <li class="list-group-item">
               <div class="d-flex justify-content-around">
                    <div class="text-center">
                         <a href="transfer.php">
                              <button type="button" class="btn btn-primary ms-1">
                                   <i class="fas fa-exchange-alt"></i>
                              </button> <br>
                              Wire <br> Transfer
                         </a>
                    </div>
                    <div class="text-center">
                         <button type="button" class="btn btn-primary ms-1">
                              <i class="fas fa-share-alt"></i>
                         </button> <br>
                         <a href="transfer.php">Local<br> Transfer</a>
                    </div>
                    <div class="text-center">
                         <a href="user-manual.php">
                              <button type="button" class="btn btn-primary ms-1">
                                   <i class="fas fa-credit-card"></i>
                              </button> <br>
                              Check <br>Deposit
                         </a>
                    </div>
               </div>
          </li>
          <li class=" list-group-item">
               <div class="d-flex justify-content-around">
                    <div class="text-center">
                         <a href="statement.php">
                              <button type="button" class="btn btn-primary ms-1">
                                   <i class="fas fa-street-view"></i>
                              </button> <br>
                              View <br> Statement
                         </a>
                    </div>
                    <div class="text-center">
                         <a href="statement.php">
                              <button type="button" class="btn btn-primary ms-1">
                                   <i class="fas fa-check-square"></i>
                              </button> <br>
                              Checking<br> Statement
                         </a>
                    </div>
                    <div class="text-center">
                         <a href="user-manual.php">
                              <button type="button" class="btn btn-primary ms-1">
                                   <i class="fas fa-vr-cardboard"></i>
                              </button> <br>
                              Credit <br>Card
                         </a>
                    </div>
               </div>
          </li>
          <li class="list-group-item">
               <div class="d-flex justify-content-around">
                    <div class="text-center">
                         <a href="user-manual.php">
                              <button type="button" class="btn btn-primary ms-1">
                                   <i class="fas fa-money-bill-alt"></i>
                              </button> <br>
                              Invest
                         </a>
                    </div>
                    <div class="text-center">
                         <a href="user-manual.php">
                              <button type="button" class="btn btn-primary ms-1">
                                   <i class="fas fa-box"></i>
                              </button> <br>
                              Logistics
                         </a>
                    </div>
                    <div class="text-center">
                         <a href="user-manual.php">
                              <button type="button" class="btn btn-primary ms-1">
                                   <i class="fas fa-lightbulb"></i>
                              </button> <br>
                              Get<br>Help
                         </a>
                    </div>
               </div>
          </li>
     </ul>
</div>


</div>

<?php require_once("dashboard-footer.php") ?>