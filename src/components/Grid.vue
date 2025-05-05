<script>
export default {
    props: {
        cripto: {
            type: String,
            required: true
        },
        moneda: {
            type: String,
            required: true
        },
        cotizacion: {
            type: Object,
            required: true
        },
        simbolo: {
            type: String,
            required: true
        },
        precio: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        }
    },
}
</script>


<template>
    <div class="mt-6">
        <div class="rounded-lg p-2">
            <div class="flex items-center justify-center mb-3">
                <img :src="`https://www.cryptocompare.com/${img}`" alt="Crypto" class="w-22 h-22">
                <div class="text-center">
                    <h3 class="text-white/70 text-sm ">
                        Precio de {{ cripto }} en {{ moneda }}
                    </h3>
                    <span class="font-bold text-3xl text-white">
                        {{ precio }}
                        {{ simbolo }}
                    </span>
                </div>
            </div>
            <div class="space-y-3 text-center">
                <div class="grid grid-cols-2 gap-4 ">
                    <div>
                        <p class="text-sm text-white/60" >Mas alto 24h</p>
                        <span class="font-bold text-green-600 text-xl">
                            {{ cotizacion.HIGH24HOUR }}
                        </span>
                    </div>
                    <div>
                        <p class="text-sm text-white/60">Mas bajo 24h</p>
                        <span class="font-bold text-red-700 text-xl">
                            {{ cotizacion.LOW24HOUR }}
                        </span>
                    </div>
                </div>
                <div class="grid grid-cols-2 text-center ">
                    <p class="text-md text-white/60">Ultima actualización</p>
                    <span class="text-white font-bold">
                        {{ cotizacion.LASTUPDATE }}
                    </span>
                </div>
            </div>

        </div>

    </div>
</template>