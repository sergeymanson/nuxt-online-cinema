<template>
    <div class="container">
        <br/>
        <div class="row" itemtype="http://schema.org/Movie">
            <div class="col-xs-12">
                <h1 class="name" itemprop="name" v-html="prepareItem.getName()">

                </h1>
                <span class="or-name" itemprop="alternativeHeadline" v-html="prepareItem.getName()"></span>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <image-custom
                        class="img-responsive"
                        :src="prepareItem.getImage()"
                        width="285"
                        height="417"
                        :alt="prepareItem.getName()"
                        itemprop="image"
                />
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 stats">
                <table class="table">
                    <tbody>

                    <tr>
                        <td class="color-one">Год</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td class="color-one">Сезонов</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td class="color-one">Страна</td>
                        <td>

                        </td>
                    </tr>




                    <tr>
                        <td class="color-one">Жанр</td>
                        <td itemprop="genre">

                        </td>
                    </tr>



                    <tr>
                        <td class="color-one">Время</td>
                        <td>м</td>
                    </tr>


                    <tr>
                        <td class="color-one">Рейтинг кинопоиск</td>
                        <td>
                            <meta itemprop="ratingValue" content="item->rating_kino">
                            <span>$item->rating_kino</span>
                        </td>
                    </tr>
                    @endif
                    </tbody>

                </table>
            </div>


            <div class="clearfix"></div>


            <div class="col-xs-12 col-sm-9 ">
                <div class="page-header">
                    <h3 class="color-one">Описание</h3>
                </div>
                <div class="description" itemprop="description">
                    $item->text
                </div>
                <div class="page-header">
                    <h3 class="color-one">Просмотр</h3>
                </div>
                <div class="text-center">

                    <div id="getmovieplayer"></div>
                </div>
                <div class="player text-center" id='player'>

                </div>



            </div>
            <div class="col-xs-12 col-sm-3 "></div>
        </div>



    </div>
</template>

<script>
    import ImageCustom from "../../plugins/element-custom/src/image";
    export default {
        components: {ImageCustom},
        name: 'card-full',
        props: {
            item: {
                type: Object,
                required: true
            },
            model: {
                required: true
            }
        },
        created () {
            this.prepareItem = new this.model(this.item);
        },
        data () {
            return {
                prepareItem: {}
            }
        }
    }
</script>