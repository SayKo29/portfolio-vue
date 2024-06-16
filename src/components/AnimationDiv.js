import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useNavBarStore } from '@/stores/navbarStore';

const AnimationDiv = (reftab = null, refDivs = null) => {
    console.log('reftab', reftab)
    console.log('refDivs', refDivs)
    const navbarStore = useNavBarStore();
    const activeTab = ref(navbarStore.activeTab);
    console.log('activeTab', activeTab.value)

    watch(
        () => navbarStore.activeTab,
        (newActiveTab) => {
            activeTab.value = newActiveTab;

            if (reftab.value && reftab.value.classList.contains(newActiveTab)) {
                reftab.value.scrollIntoView({ behavior: 'smooth' });
            }
        },
        { immediate: true }
    );
    const handleScroll = () => {
        console.log('Scrolling...');
        const scrollPosition = window.scrollY;
        refDivs.value.forEach((div) => {
            alert('div')
            const offsetTop = div.getBoundingClientRect().top + scrollPosition;
            if (scrollPosition >= offsetTop - (window.innerHeight / 4) * 3) {
                div.classList.add('active');
            } else {
                div.classList.remove('active');
            }
        });
    };

    onMounted(() => {
        if (reftab !== null && reftab.value.classList.contains(activeTab.value)) {
            reftab.value.scrollIntoView({ behavior: 'smooth' });
        }

        if (refDivs !== null) {
            refDivs.value.forEach((div) => {
                div.classList.add('animation');
            });
            window.addEventListener('scroll', handleScroll);
        }
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });
};

export default AnimationDiv;