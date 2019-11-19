import Vue from 'vue';

export const loadData = ({ commit }) => {
  Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        const funds = data.funds;
        const stockPortofolio = data.stockPortofolio;
        const stocks = data.stocks;

        const portofolio = {
          funds,
          stockPortofolio,
        }
        commit('SET_STOCKS', stocks);
        commit('SET_PORTOFOLIO', portofolio)
      }
    });
};