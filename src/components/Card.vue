<script>
import Formulario from './Formulario.vue';
import Grid from './Grid.vue';

export default {
    components: {
        Formulario,
        Grid,
    },
    data() {
        return {
            cotizacion: null,
            cripto: '',
            moneda: '',
            simbolo: '',
            precio: '',
            img: '', 
            loading: false,
        }
    },
    methods: {
        async cotizar(cripto, moneda) {
            console.log('Cotizar', cripto, moneda);
            
            this.cripto = cripto;
            this.moneda = moneda;
            this.loading = true;
            await this.getCotizacion();
            this.loading = false;
        },
        async getCotizacion() {
            try {

                if ( !this.cripto || !this.moneda ) {
                    console.log('Faltan valores de cripto y moneda');
                    return;                    
                }

                const res = await fetch(
                    `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${this.cripto}&tsyms=${this.moneda}`
                );
                const data = await res.json();
                this.cotizacion = data.DISPLAY[this.cripto][this.moneda];
                this.simbolo = this.cotizacion.FROMSYMBOL;
                this.precio = this.cotizacion.PRICE;
                this.img = this.cotizacion.IMAGEURL;
                console.log('Datos de la API', data);
                
            } catch (error) {
                console.error(error);
            }
        },
    },
}
</script>


<template>
    <div class="max-w-3xl mx-auto mt-5">
        <div class="bg-white-20 border border-white/10 backdrop-blur-md backdrop-saturate-100 rounded-3xl shadow-lg p-6">
            <div class="text-center m-6">
                <h2 class="text-6xl font-bold text-white mb-3">Cripto Cotizador</h2>
                <div class="text-xl font-light text-white/60">
                    Desarrollado por:
                    <a 
                        href="https://github.com/rick672" 
                        class="font-bold text-white :hover:text-gray-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    Ricardo Aliaga Catari
                    </a>
                </div>
            </div>
            <div class="h-px bg-white/30 my-8"></div>
            <div class="flex flex-wrap transition-all duration-300 ease-in-out text-xl">
                <!-- Formulario -->
                <div
                    :class="[
                        'px-2 transition-all duration-300 ease-in-out',
                        cotizacion ? 'w-full lg:w-1/2' : 'w-full'
                    ]"
                >
                    <Formulario 
                        @cotizar="cotizar" 
                        :loading="loading"
                    />
                </div>
                <!-- Cotizado -->
                <transition name="fade">
                    <div
                        v-if="cotizacion"
                        class="w-full lg:w-1/2"
                    >
                        <Grid 
                            :cripto="cripto" 
                            :moneda="moneda"
                            :cotizacion="cotizacion"
                            :simbolo="simbolo"
                            :precio="precio"
                            :img="img"
                        />
                    </div>
                </transition>
            </div>

        </div>

    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>