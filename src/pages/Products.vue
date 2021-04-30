<template>
    <div class="row">
        
        <h1 class="my-4 title-tenant text-center">{{ company.name }}</h1> 
        <div class="list-categories">
          <a href="#" 
          class="list-categories__item" 
          v-for="(category, index) in categories.data " :key="index">
          <div class="icon"><i class="fas fa-pizza-slice"></i> </div> 
          <span> {{ category.name }} </span>
          </a>
         
        </div>

            <!-- Cards Produtos -->
        <div class="row my-4">

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card--flat h-100">
                <a href="#">
                    <div class="card-image">
                    <img class="card-img-top" src="imgs/pizza.png" alt="">
                    </div>
                </a>
                <div class="card-body">
                    <h4 class="card-title">
                    <a href="#">Pizza</a>
                    </h4>
                    <h5>R$ 12,99</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div class="card-footer card-footer-custom">
                    <a href="carrinho.html"></a>
                    <router-link :to="{name: 'cart'}">
                        Adicionar no Carrinho <i class="fas fa-cart-plus"></i>
                    </router-link>
                </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card--flat h-100">
                <a href="#">
                    <div class="card-image">
                    <img class="card-img-top" src="imgs/acai.png" alt="">
                    </div>
                </a>
                <div class="card-body">
                    <h4 class="card-title">
                    <a href="#">Açai na Tijela</a>
                    </h4>
                    <h5>R$ 12,99</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="card-footer card-footer-custom">
                    <a href="carrinho.html">Adicionar no Carrinho <i class="fas fa-cart-plus"></i></a>
                </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="disabled card--flat h-100">
                <a href="#">
                    <div class="card-image">
                    <img class="card-img-top" src="imgs/lanches.png" alt="">
                    </div>
                </a>
                <div class="card-body">
                    <h4 class="card-title">
                    <a href="#">Sanduiche</a>
                    </h4>
                    <h5>R$ 12,99</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="card-footer card-footer-custom">
                    <a href="carrinho.html">Adicionar no Carrinho <i class="fas fa-cart-plus"></i></a>
                </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card--flat h-100">
                <a href="#">
                    <div class="card-image">
                    <img class="card-img-top" src="imgs/pizza.png" alt="">
                    </div>
                </a>
                <div class="card-body">
                    <h4 class="card-title">
                    <a href="#">Pizza</a>
                    </h4>
                    <h5>R$ 12,99</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="card-footer card-footer-custom">
                    <a href="carrinho.html">Adicionar no Carrinho <i class="fas fa-cart-plus"></i></a>
                </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card--flat h-100">
                <a href="#">
                    <div class="card-image">
                    <img class="card-img-top" src="imgs/japonesa.png" alt="">
                    </div>
                </a>
                <div class="card-body">
                    <h4 class="card-title">
                    <a href="#">Japonesa</a>
                    </h4>
                    <h5>R$ 12,99</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="card-footer card-footer-custom">
                    <a href="carrinho.html">Adicionar no Carrinho <i class="fas fa-cart-plus"></i></a>
                </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card--flat h-100">
                <a href="#">
                    <div class="card-image">
                    <img class="card-img-top" src="imgs/acai.png" alt="">
                    </div>
                </a>
                <div class="card-body">
                    <h4 class="card-title">
                    <a href="#">Açai na Tijela</a>
                    </h4>
                    <h5>R$ 12,99</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="card-footer card-footer-custom">
                    <a href="carrinho.html">Adicionar no Carrinho <i class="fas fa-cart-plus"></i></a>
                </div>
                </div>
            </div>
        </div>

    </div>
    <!-- /.row -->
</template>

<script>
import { mapState , mapActions} from 'vuex'
export default {
   props: ['companyFlag'],

   created() {
       if(this.company.name === '') {
           return this.$router.push({name: 'home'})
       }

       this.getCategoriesByCompany(this.company.uuid)
            .catch(response => {
                this.$vToastify.error('Falha ao Carregar as Categorias', 'Erro');
              })
   },
   
   computed: {
       ...mapState({
           company: state => state.companies.companySelected,
           categories: state => state.companies.categoriesCompanySelected
       })
   },

   methods: {
       ...mapActions([
           'getCategoriesByCompany'
       ])
   }
}
</script>