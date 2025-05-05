<script>
export default {
    props: {
        loading: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            moneda: 'USD',
            cripto: 'BTC',  
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('cotizar', this.cripto, this.moneda);
        },
    }
}
</script>

<template>
    <div class="mt-6 max-w-md mx-auto">
        <form action="" class="rounded-lg" @submit.prevent="handleSubmit">
            <div class="space-y-6">
                <div>
                    <label class="text-white/70 text-md mb-2 block" for="moneda">
                        Selecciona tu Moneda
                    </label>
                    <select 
                        name="moneda" 
                        id="moneda" 
                        class="w-full p-2 border text-white border-gray-200 rounded-md focus:outline-none focus:border-gray-100 transition-colors"
                        v-model="moneda"
                        >
                        <option class="bg-gray-800" value="USD">USD</option>
                        <option class="bg-gray-800" value="EUR">EUR</option>
                        <option class="bg-gray-800" value="GBP">GBP</option>
                    </select>
                </div>

                <div>
                    <label class="text-white/70 text-md mb-2 block" for="cripto">
                        Selecciona tu Criptomoneda
                    </label>
                    <select 
                        name="cripto" 
                        id="cripto" 
                        class="w-full p-2 border  text-white border-gray-200 rounded-md focus:outline-none focus:border-gray-400 transition-colors"
                        v-model="cripto"
                        >
                        <option class="bg-gray-800" value="BTC">Bitcoin</option>
                        <option class="bg-gray-800" value="ETH">Ethereum</option>
                        <option class="bg-gray-800" value="LTC">Litecoin</option>
                        <option class="bg-gray-800" value="XRP">XRP</option>
                        <option class="bg-gray-800" value="ADA">Cardano</option>
                        <option class="bg-gray-800" value="SOL">Solana</option>
                        <option class="bg-gray-800" value="DOGE">Dogecoin</option>
                        <option class="bg-gray-800" value="SHIB">Shiba Inu</option>
                        <option class="bg-gray-800" value="DOT">Polkadot</option>
                        <option class="bg-gray-800" value="XLM">Stellar</option>
                    </select>
                </div>

                <button 
                    type="submit" 
                    class="w-full bg-amber-500 text-2xl py-2 px-4 rounded-md hover:bg-amber-400 transition-colors cursor-pointer"
                >
                    {{ loading ? 'Cargando...' : 'Cotizar' }}
                </button>
            </div>
        </form>
    </div>
</template>