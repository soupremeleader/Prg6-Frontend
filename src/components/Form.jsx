function Form({ formData, handleInputChange, handleSubmit }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="ho acs ahs sij axa cud cvb cve cvz cyy"
    >
      <div className="cpa csv ctl ctu cxk">
        <label htmlFor="title" className="ky aze azp baw cxx">
          Wat is de titel van het project?
        </label>
        <div className="hf clo cmy">
          <input
            className="ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzo bzq bzx crx dai"
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="cpa csv ctl ctu cxk">
        <label htmlFor="link" className="ky aze azp baw cxx">
          Heb je een link naar het patroon?
        </label>
        <div className="hf clo cmy">
          <input
            className="ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzo bzq bzx crx dai"
            type="text"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="cpa csv ctl ctu cxk">
        <label htmlFor="type" className="ky aze azp baw cxx">
          Welke vorm van handwerk is dit project?
        </label>
        <div className="hf clo cmy">
          <input
            className="ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzo bzq bzx crx dai"
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="cpa csv ctl ctu cxk">
        <label htmlFor="size" className="ky aze azp baw cxx">
          Welke grootte naald heb je nodig voor dit project?
        </label>
        <div className="hf clo cmy">
          <input
            className="ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzo bzq bzx crx dai"
            type="text"
            id="size"
            name="size"
            value={formData.size}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="cpa csv ctl ctu cxk">
        <label htmlFor="wool" className="ky aze azp baw cxx">
          Welke wol heb je gebruikt voor het project?
        </label>
        <div className="hf clo cmy">
          <input
            className="ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzo bzq bzx crx dai"
            type="text"
            id="wool"
            name="wool"
            value={formData.wool}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="cpa csv ctl ctu cxk">
        <label htmlFor="row" className="ky aze azp baw cxx">
          Waar in het project ben je?
        </label>
        <div className="hf clo cmy">
          <input
            className="ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzo bzq bzx crx dai"
            type="text"
            id="row"
            name="row"
            value={formData.row}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button type="submit">Verzenden</button>
    </form>
  );
}

export default Form;
