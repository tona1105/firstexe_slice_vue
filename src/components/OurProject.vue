<template>
    <section class="bg--white">
        <div class="container" id="portfolio">
            <div class="project">
                <div class="project__header">
                    <div class="project__title">
                        <h1>CHECK OUT PROJECTS</h1>
                    </div>
                    <div class="project__description">
                        <p>Minuteness of the parts formed a great hindrance to my speed, resolved,
                            contrary to my first intention, to make the being. Minuteness of the
                            parts formed a great hindrance to my speed, resolved, contrary to my first
                            intention, to make the being.</p>
                    </div>
                </div>
                <div class="line--black2"></div>
                <div class="project__body">
                    <div class="project__navbar">
                        <p>PORTFLOLIO</p>
                        <ul v-for="(item, index) in listCategory" :key="index">
                            <li :id="index" class="navbar__item"
                                :class="{ 'button--active': this.idClicked === index.toString() }"
                                @click="chooseCategory">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                    <div class="project__select">
                        <p>PORTFLOLIO</p>
                        <select id="select" name="option">
                            <option value="0">All</option>
                            <option value="1">Design</option>
                            <option value="3">Development</option>
                            <option value="2">Branding</option>
                            <option value="4">Products</option>
                        </select>
                    </div>
                    <div>
                        <div id="project__json" class="">
                            <div  v-for="(item, index) in filterListProjectToShow" :key="index" :style="{animation: 'show 1s'}">
                            <ProjectItem :item="item"/>
                            </div>
                        </div>
                        <div class="project__button">
                            <div class="project__button--pink" @click="handleShowMore"
                            :style="{display: showMore ? 'none' : ''}">
                                LOAD MORE
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import ProjectItem from './ProjectItem.vue'
export default {
    setup() {
        const listCategory = ref(['All', 'Design', 'Development', 'Branding', 'Products'])
        const listProject = ref([])
        const filterListProjectToShow = ref([])
        const arrFilter = ref([])
        var showMore = ref(false)
        var idClicked = ref('0')
        // Filter Project
        const chooseCategory = (event) => {
            // show button ShowMore
            showMore.value = false
            // set id clicked
            idClicked.value = event.target.id
            // start filter
            if (idClicked.value !== '0') {
                arrFilter.value = listProject.value.filter(item => item.categoryid.toString() === idClicked.value)
                filterListProjectToShow.value = arrFilter.value
            }
            else {
                // get project design and branding to show 
                arrFilter.value = listProject.value.filter(item => item.categoryid.toString() === '1' || item.categoryid.toString() === '3')
                filterListProjectToShow.value = arrFilter.value
            }


        }
        const getData = async () => {
            try {
                // get data
                const res = await axios.get('https://api.jsonstorage.net/v1/json/408d6271-d488-49a0-b66b-6d425e49f6ab/167863b8-ec7c-4e18-9024-7d57782f8f42')
                const data = res
                listProject.value = data.data.data
                // handle data
                filterListProjectToShow.value = listProject.value
                arrFilter.value = listProject.value.filter(item => item.categoryid.toString() === '1' || item.categoryid.toString() === '3')
                filterListProjectToShow.value = arrFilter.value
            }
            catch {
                console.log('err');
            }
        }
        const handleShowMore = () => {
            // show more by condition id
            if(idClicked.value === '0') {
                arrFilter.value = listProject.value.filter(item => item.categoryid.toString() !== '1' || item.categoryid.toString() !== '3')
                filterListProjectToShow.value.push(...arrFilter.value)
                showMore.value = true
            }
            else {
                showMore.value = true

            }
        }
        onMounted(() => {
            getData()
        })
        return { idClicked, chooseCategory, listCategory, listProject, handleShowMore, filterListProjectToShow, showMore }
    },
    components: {
        ProjectItem
    }
    

}
</script>