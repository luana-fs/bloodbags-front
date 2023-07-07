interface Request{
    id?: number,
    hospitalId?: number,
    hospitalName?: string,
    bloodType?: number,
    rh?: true,
    amount?: number

    showInput?: boolean
  }

  export default Request;