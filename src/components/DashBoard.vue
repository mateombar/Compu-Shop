<template>
  <div id="dashboard">
    <h3>DashBoard</h3>
    <div class="row mb-5">
      <h4>Mas Vendido</h4>
      <div class="col-md-12">
        <div id="best-sellers-carousel" class="carousel slide" data-ride="carousel">
          <!-- Carousel items -->
          <div class="carousel-inner ">
            <div class="carousel-item active ">
              <div class="row justify-content-center">
                <div class="col-md-3">
                  <a href="#">
                    <div class="card card-hover">
                      <img src="http://placehold.it/250x250" class="card-img-top" alt="Image" style="max-width:100%;" />
                      <div class="card-body">
                        <h5 class="card-title">$1'850.000</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-3">
                  <a href="#">
                    <div class="card card-hover">
                      <img src="http://placehold.it/250x250" class="card-img-top" alt="Image" style="max-width:100%;" />
                      <div class="card-body">
                        <h5 class="card-title">$1'850.000</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-3">
                  <a href="#">
                    <div class="card card-hover">
                      <img src="http://placehold.it/250x250" class="card-img-top" alt="Image" style="max-width:100%;" />
                      <div class="card-body">
                        <h5 class="card-title">$1'850.000</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-3">
                  <a href="#">
                    <div class="card card-hover">
                      <img src="http://placehold.it/250x250" class="card-img-top" alt="Image" style="max-width:100%;" />
                      <div class="card-body">
                        <h5 class="card-title">$1'850.000</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <!--.row-->
            </div>

            <div class="carousel-item ">
              <div class="row justify-content-center">
                <div class="col-md-3">
                  <a href="#">
                    <div class="card card-hover">
                      <img src="http://placehold.it/250x250" class="card-img-top" alt="Image" style="max-width:100%;" />
                      <div class="card-body">
                        <h5 class="card-title">$1'350.000</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-3">
                  <a href="#">
                    <div class="card card-hover">
                      <img src="http://placehold.it/250x250" class="card-img-top" alt="Image" style="max-width:100%;" />
                      <div class="card-body">
                        <h5 class="card-title">$1'621.000</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-3">
                  <a href="#">
                    <div class="card card-hover">
                      <img src="http://placehold.it/250x250" class="card-img-top" alt="Image" style="max-width:100%;" />
                      <div class="card-body">
                        <h5 class="card-title">$1'990.000</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-md-3">
                  <a href="#">
                    <div class="card card-hover">
                      <img src="http://placehold.it/250x250" class="card-img-top" alt="Image" style="max-width:100%;" />
                      <div class="card-body">
                        <h5 class="card-title">$1'250.000</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <!--.row-->
            </div>
          </div>
          <!--.carousel-inner-->
        </div>
        <!--.Carousel-->
        <a id="iconos" class="controls bg-primary carousel-control-prev" href="#best-sellers-carousel" role="button" data-slide="prev">
          <span aria-hidden="true"><i class="fas fa-chevron-left"></i></span>
        </a>
        <a id="iconos" class="controls bg-primary carousel-control-next" href="#best-sellers-carousel" role="button" data-slide="next">
          <span aria-hidden="true"> <i class="fas fa-chevron-right"></i></span>
        </a>
      </div>
    </div>
    <div class="row justify-content-center">
      <ul class="list-group list-group-horizontal-md">
        <li class="list-group-item ">
          <a href="#">
            <span><i class="far fa-credit-card"></i></span>
          </a>
          Paga con Tarjeta
        </li>
        <li class="list-group-item">
          <a href="#">
            <span><i class="fas fa-shield-alt"></i></span>
          </a>
          Pago Seguro
        </li>
        <li class="list-group-item">
          <a href="#">
            <span><i class="fas fa-money-bill-wave"></i></span>
          </a>
          Paga en Efectivo
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard'
}
</script>
<style scoped>
.card-hover:hover {
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.75);
}

.carousel-item {
  padding: 15px;
}

#best-sellers-carousel a {
  text-decoration: none;
}

.controls {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  opacity: 0.7;
}
.controls:hover {
  -webkit-box-shadow: 0px 0px 19px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 19px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 19px -5px rgba(0, 0, 0, 0.75);
}

#iconos {
  border-radius: 200px 200px 200px 200px;
  -moz-border-radius: 200px 200px 200px 200px;
  -webkit-border-radius: 200px 200px 200px 200px;
  border: 0px solid #000000;
}
</style>
